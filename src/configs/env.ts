import dotenv from 'dotenv'

dotenv.config()

const { env } = process

const assertEnv = (env: string): 'production' | 'development' => {
    const map = {
        production: 'production',
        development: 'development',
    }

    return map[env] || 'production'
}

const NODE_ENV = assertEnv(env.NODE_ENV)
const DISCORD_TOKEN = env.DISCORD_TOKEN
const STEAM_API_KEY = env.STEAM_API_KEY

if (!DISCORD_TOKEN) {
    throw new Error('DISCORD_TOKEN is required')
}

if (!STEAM_API_KEY) {
    throw new Error('STEAM_API_KEY is required')
}

const DB = {
    HOST: env.DB_HOST,
    PORT: parseInt(env.DB_PORT),
    USER: env.DB_USER,
    PASSWORD: env.DB_PASSWORD,
    NAME: env.DB_NAME,
}

export { NODE_ENV, DISCORD_TOKEN, DB, STEAM_API_KEY }
