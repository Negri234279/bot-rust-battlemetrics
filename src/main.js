const logger = require('./providers/logger')
const bot = require('./configs/bot.config')

const run = async () => {
    try {
        logger.info('Iniciando bot...')

        await bot()

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
