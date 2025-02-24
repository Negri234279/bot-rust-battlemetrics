import { inject, injectable } from 'inversify'
import Database from '../configs/Database'
import TYPES from '../configs/types'
import { User } from '../types/user'
import { BattlemetricsRepository } from './battlemetrics.repository'

@injectable()
class BattlemetricsRepositoryImpl extends BattlemetricsRepository {
    constructor(@inject(TYPES.Database) private _db: Database) {
        super()
        this._initializeSchema()
    }

    async find(discordId: string): Promise<User[]> {
        return await this._db.query(`SELECT * FROM users WHERE discord_group_id = ?`, [discordId])
    }

    async findOne(user: Pick<User, 'battlemetrics_id' | 'discord_group_id'>): Promise<User | null> {
        const [userFound] = await this._db.query(
            `SELECT * FROM users WHERE battlemetrics_id = ? AND discord_group_id = ?`,
            [user.battlemetrics_id, user.discord_group_id]
        )

        if (!userFound) return null

        return userFound
    }

    async create(user: User): Promise<void> {
        await this._db.query(
            `INSERT INTO users (battlemetrics_id, alias, discord_id, steam_id, discord_group_id) VALUES (?, ?, ?, ?, ?)`,
            [
                user.battlemetrics_id,
                user.alias,
                user.discord_id,
                user.steam_id,
                user.discord_group_id,
            ]
        )
    }

    async update(user: User): Promise<void> {
        await this._db.query(
            `UPDATE users SET alias = ?, discord_id = ?, steam_id = ? WHERE battlemetrics_id = ? AND discord_group_id = ?`,
            [
                user.alias,
                user.discord_id,
                user.steam_id,
                user.battlemetrics_id,
                user.discord_group_id,
            ]
        )
    }

    async remove(user: Pick<User, 'battlemetrics_id' | 'discord_group_id'>): Promise<void> {
        await this._db.query(
            `DELETE FROM users WHERE battlemetrics_id = ? AND discord_group_id = ?`,
            [user.battlemetrics_id, user.discord_group_id]
        )
    }

    protected async _initializeSchema(): Promise<void> {
        await this._db.query(`
            CREATE TABLE IF NOT EXISTS users (
                battlemetrics_id VARCHAR(255) NOT NULL,
                alias VARCHAR(255) NOT NULL,
                discord_id VARCHAR(255),
                steam_id VARCHAR(255),
                discord_group_id VARCHAR(255) NOT NULL,
                PRIMARY KEY (battlemetrics_id)
            )
        `)
    }
}

export default BattlemetricsRepositoryImpl
