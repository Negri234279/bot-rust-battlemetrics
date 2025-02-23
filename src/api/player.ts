import { default as axios } from 'axios'
import type { PlayerResponse } from '../types/player-response'
import { BATTLEMETRICS_API_URL } from './base-url'

export const getPlayer = async (playerId: string): Promise<PlayerResponse | null> => {
    try {
        const urlSession = `${BATTLEMETRICS_API_URL}/players/${playerId}`
        const responseSession = await axios.get<PlayerResponse>(urlSession)

        return responseSession.data
    } catch (error) {
        return null
    }
}
