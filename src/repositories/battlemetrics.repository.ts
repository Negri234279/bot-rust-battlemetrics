import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import * as path from 'node:path'

const dbPath = path.join(__dirname, 'database.json')

export class BattlemetricsRepositoryImpl {
    static instance: BattlemetricsRepositoryImpl

    private database: { [key: string]: { id: string; alias: string }[] }

    constructor() {
        if (!existsSync(dbPath)) {
            writeFileSync(dbPath, JSON.stringify({}), 'utf-8')
        }

        this.database = JSON.parse(readFileSync(dbPath, 'utf-8'))

        if (BattlemetricsRepositoryImpl.instance) {
            return BattlemetricsRepositoryImpl.instance
        }

        BattlemetricsRepositoryImpl.instance = this
    }

    /**
     * @param {string} discordId
     * @returns {Promise<{id: string, alias: string}[]>}
     */
    async getUsers(discordId: string): Promise<{ id: string; alias: string }[]> {
        return this.database[discordId] || []
    }

    /**
     * @param {string} userId
     * @param {string} discordId
     * @returns {Promise<{id: string, alias: string} | null>}
     */
    async getUser(userId: string, discordId: string): Promise<{ id: string; alias: string } | null> {
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
    async addUser(user: { id: string; alias: string }, discordId: string): Promise<void> {
        const users = this.database[discordId] || []
        this.database[discordId] = [...users, user]

        await writeFile(dbPath, JSON.stringify(this.database, null, 2))
    }

    /**
     * @param {{id: string, alias: string}} user
     * @param {string} discordId
     * @returns {Promise<void>}
     */
    async updateUser(user: { id: string; alias: string }, discordId: string): Promise<void> {
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
    async removeUser(userId: string, discordId: string): Promise<void> {
        const users = this.database[discordId] || []
        this.database[discordId] = users.filter((user) => user.id !== userId)

        await writeFile(dbPath, JSON.stringify(this.database, null, 2))
    }
}
