require('dotenv').config()

/**
 * @type {'production' | 'development'}
 */
const NODE_ENV = process.env.NODE_ENV || 'production'
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

module.exports = {
    NODE_ENV,
    DISCORD_TOKEN,
}
