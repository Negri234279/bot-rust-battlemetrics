import { Client, GatewayIntentBits } from 'discord.js'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

import ControlledError from '../errors/controlled.error'
import { Command, LoadCommands } from '../types/command'
import { DISCORD_TOKEN } from './env'
import logger from '../providers/logger'

const bot = async () => {
    if (!DISCORD_TOKEN) {
        logger.error('No se ha encontrado el token de Discord')
        process.exit(1)
    }

    const client = new Client({ intents: [GatewayIntentBits.Guilds] })

    const { commands, data } = await _loadCommands()

    client.once('ready', async () => {
        const promises = data.map(async (commandBuilder) => {
            await client.application.commands.create(commandBuilder)
        })

        await Promise.all(promises)

        logger.info(`Bot listo como ${client.user.tag}`)
    })

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return

        try {
            const time = new Date()

            const command = commands.get(interaction.commandName)
            if (!command) {
                throw new Error('Comando no encontrado')
            }

            await command.execute(interaction)

            const timeResponse = new Date().getTime() - time.getTime()
            const { username } = interaction.user

            const msgCmd = `${interaction.commandName} - ${username} - Tiempo de respuesta: ${timeResponse}ms`
            logger.info(msgCmd)
        } catch (error) {
            const msgLog = `Error al ejecutar el comando ${interaction.commandName} - ${interaction.user.username}:`
            logger.error(msgLog, error)

            const msg =
                error instanceof ControlledError
                    ? error.message
                    : 'Hubo un error al ejecutar el comando.'

            await interaction.reply(msg)
        }
    })

    await client.login(DISCORD_TOKEN)

    logger.info('Bot iniciado correctamente')
}

const _loadCommands = async (): Promise<LoadCommands> => {
    const commandsFolder = path.join(__dirname, '../commands')
    const commandFiles = await fs.readdir(commandsFolder)

    const commandFilesFiltered = commandFiles.filter(
        (file) => file.endsWith('.command.js') || file.endsWith('.command.ts')
    )

    const commands = new Map<string, Command>()
    const commandsData = []

    for (const file of commandFilesFiltered) {
        const filePath = path.join(commandsFolder, file)
        const { default: command }: { default: Command } = require(filePath)

        if (!command.data || !command.execute) {
            logger.warn(`El archivo ${file} no exporta un comando válido.`)
            continue
        }

        commands.set(command.data.name, command)
        commandsData.push(command.data)
    }

    return {
        commands,
        data: commandsData,
    }
}

export default bot
