import { User } from '../types/user'

export abstract class BattlemetricsRepository {
    abstract find(discordId: string): Promise<User[]>
    abstract findOne(user: Pick<User, 'battlemetrics_id' | 'discord_group_id'>): Promise<User | null>
    abstract create(user: User): Promise<void>
    abstract update(user: User): Promise<void>
    abstract remove(user: Pick<User, 'battlemetrics_id' | 'discord_group_id'>): Promise<void>
    protected abstract _initializeSchema(): Promise<void>
}
