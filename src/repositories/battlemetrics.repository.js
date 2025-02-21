const { readFileSync } = require('node:fs')
const { writeFile } = require('node:fs/promises')
const path = require('node:path')

const dbPath = path.join(__dirname, 'database.json')

class BattlemetricsRepositoryImpl {
    /** @type {{[key: string]: {id: string, alias: string}[]}} */
    database

    constructor() {
        this.database = JSON.parse(readFileSync(dbPath, 'utf-8'))

        if (BattlemetricsRepositoryImpl.instance) {
            return BattlemetricsRepositoryImpl.instance
        }
    }

    /**
     * @param {string} discordId
     * @returns {Promise<{id: string, alias: string}[]>}
     */
    async getUsers(discordId) {
        return this.database[discordId] || []
    }

    /**
     * @param {string} userId
     * @param {string} discordId
     * @returns {Promise<{id: string, alias: string} | null>}
     */
    async getUser(userId, discordId) {
        const users = this.database[discordId] || []
        const user = users.find((user) => user.id === userId)
        if (!user) return null

        return user
    }

    /**
     * @param {{id: string, alias: string}} user
     * @param {string} discordId
     * @returns {Promise<void>}
     */
    async addUser(user, discordId) {
        const users = this.database[discordId] || []
        this.database[discordId] = [...users, user]

        await writeFile(dbPath, JSON.stringify(this.database, null, 2))
    }

    /**
     * @param {{id: string, alias: string}} user
     * @param {string} discordId
     * @returns {Promise<void>}
     */
    async updateUser(user, discordId) {
        const users = this.database[discordId] || []
        const userIndex = users.findIndex((u) => u.id === user.id)
        if (userIndex === -1) return

        users[userIndex] = user
        this.database[discordId] = users

        await writeFile(dbPath, JSON.stringify(this.database, null, 2))
    }

    /**
     * @param {string} userId
     * @param {string} discordId
     * @returns {Promise<void>}
     */
    async removeUser(userId, discordId) {
        const users = this.database[discordId] || []
        this.database[discordId] = users.filter((user) => user.id !== userId)

        await writeFile(dbPath, JSON.stringify(this.database, null, 2))
    }
}

module.exports = BattlemetricsRepositoryImpl
