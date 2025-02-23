import dotenv from 'dotenv'

dotenv.config()

const assertEnv = (env: string): 'production' | 'development' => {
    const map = {
        production: 'production',
        development: 'development',
    }

    return map[env] || 'production'
}

const NODE_ENV = assertEnv(process.env.NODE_ENV)
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

export { NODE_ENV, DISCORD_TOKEN }
