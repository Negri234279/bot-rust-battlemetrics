const { Client, GatewayIntentBits } = require('discord.js')
const addPlayerCommand = require('./commands/add-player.command')
const listPlayerCommand = require('./commands/list-player.command')
const playerCommand = require('./commands/player.command')
const playersCommand = require('./commands/players.command')
const removePlayerCommand = require('./commands/remove-player.command')
const { DISCORD_TOKEN } = require('./configs/env')
const ControlledError = require('./errors/controlled.error')
const logger = require('./providers/logger')

const run = async () => {
    try {
        if (!DISCORD_TOKEN) {
            logger.error('No se ha encontrado el token de Discord')
            process.exit(1)
        }

        logger.info('Iniciando bot...')

        const client = new Client({ intents: [GatewayIntentBits.Guilds] })

        client.once('ready', async () => {
            await client.application.commands.create(playerCommand.data)
            await client.application.commands.create(addPlayerCommand.data)
            await client.application.commands.create(removePlayerCommand.data)
            await client.application.commands.create(listPlayerCommand.data)
            await client.application.commands.create(playersCommand.data)

            logger.info(`Bot listo como ${client.user.tag}`)
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

        client
            .login(DISCORD_TOKEN)
            .then(() => logger.info('Bot iniciado correctamente'))
            .catch((error) => {
                logger.error('Error al iniciar sesión:', error)
                process.exit(1)
            })

        process.on('uncaughtException', (error) => {
            logger.error('Error no controlado (unhandledRejection):', error)
        })

        process.on('unhandledRejection', (error) => {
            logger.error('Error no controlado (unhandledRejection):', error)
        })

        process.on('SIGINT', () => {
            logger.info('Recibida señal SIGINT. Saliendo del proceso...')
            process.exit(0)
        })

        process.on('SIGTERM', () => {
            logger.info('Recibida señal SIGTERM. Saliendo del proceso...')
            process.exit(0)
        })

        process.on('exit', () => {
            logger.info('Saliendo del proceso...')
        })
    } catch (error) {
        logger.error('Error en la ejecución del bot:', error)
        process.exit(1)
    }
}

run()
