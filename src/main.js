require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js')
const playerCommand = require('./commands/player.command')
const addPlayerCommand = require('./commands/add-player.command')
const removePlayerCommand = require('./commands/remove-player.command')
const listPlayerCommand = require('./commands/list-player.command')
const playersCommand = require('./commands/players.command')
const ControlledError = require('./errors/controlled.error')

const DISCORD_TOKEN = process.env.DISCORD_TOKEN

const run = async () => {
    try {
        if (!DISCORD_TOKEN) {
            throw new Error('No se encontró el token de Discord.')
        }

        const client = new Client({ intents: [GatewayIntentBits.Guilds] })

        client.once('ready', async () => {
            await client.application.commands.create(playerCommand.data)
            await client.application.commands.create(addPlayerCommand.data)
            await client.application.commands.create(removePlayerCommand.data)
            await client.application.commands.create(listPlayerCommand.data)
            await client.application.commands.create(playersCommand.data)

            console.log(`Bot listo como ${client.user.tag}`)
        })

        client.on('interactionCreate', async (interaction) => {
            try {
                if (!interaction.isCommand()) return
                const time = new Date()

                const mapCommands = {
                    [addPlayerCommand.commandName]: addPlayerCommand,
                    [playerCommand.commandName]: playerCommand,
                    [removePlayerCommand.commandName]: removePlayerCommand,
                    [listPlayerCommand.commandName]: listPlayerCommand,
                    [playersCommand.commandName]: playersCommand,
                }

                if (!mapCommands[interaction.commandName]) {
                    throw new Error('Comando no encontrado')
                }

                await mapCommands[interaction.commandName].execute(interaction)

                const timeResponse = new Date() - time
                const { username } = interaction.user

                console.log(
                    `${interaction.commandName} - ${username} - Tiempo de respuesta: ${timeResponse}ms`
                )
            } catch (error) {
                console.error(error)

                const msg =
                    error instanceof ControlledError
                        ? error.message
                        : 'Hubo un error al ejecutar el comando.'

                await interaction.reply(msg)
            }
        })

        client.login(DISCORD_TOKEN)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

run()
