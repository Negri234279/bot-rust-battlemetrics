import { injectable } from 'inversify'
import { createPool, Pool, PoolConnection, QueryOptions } from 'mariadb'

import logger from '../providers/logger'
import { DB } from './env'

@injectable()
class Database {
    private pool: Pool

    constructor() {
        this.pool = createPool({
            host: DB.HOST,
            port: DB.PORT,
            user: DB.USER,
            password: DB.PASSWORD,
            database: DB.NAME,
            connectionLimit: 5,
        })

        this._testConnection()
    }

    async query<T = any>(sql: string | QueryOptions, params: any[] = []): Promise<T> {
        let conn: PoolConnection

        try {
            conn = await this.pool.getConnection()
            const res = await conn.query(sql, params)
            return res
        } finally {
            if (conn) conn.release()
        }
    }

    private async _testConnection(): Promise<void> {
        let conn: PoolConnection

        try {
            conn = await this.pool.getConnection()
            logger.info('Conexión a la base de datos establecida')
        } catch (error) {
            throw error
        } finally {
            if (conn) {
                conn.release()
            }
        }
    }
}

export default Database
