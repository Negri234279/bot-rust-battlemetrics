import { default as axios } from 'axios'
import type { PlayerSessionsResponse } from '../types/player-sessions-response'
import { BATTLEMETRICS_API_URL } from './base-url'

export const getPlayerSessions = async (
    playerId: string
): Promise<PlayerSessionsResponse | null> => {
    try {
        const url = `${BATTLEMETRICS_API_URL}/players/${playerId}/relationships/sessions`
        const response = await axios.get<PlayerSessionsResponse>(url)

        return response.data
    } catch (error) {
        return null
    }
}
