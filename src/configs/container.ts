import { Container } from 'inversify'

import { BattlemetricsRepository } from '../repositories/battlemetrics.repository'
import BattlemetricsRepositoryImpl from '../repositories/battlemetrics.repository-impl'
import Database from './Database'
import TYPES from './types'

const container = new Container()

container.bind<Database>(TYPES.Database).to(Database).inSingletonScope()
container
    .bind<BattlemetricsRepository>(TYPES.BattlemetricsRepository)
    .to(BattlemetricsRepositoryImpl)
    .inSingletonScope()

export { container }
