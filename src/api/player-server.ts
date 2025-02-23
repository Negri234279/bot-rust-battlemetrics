import { default as axios } from 'axios'
import type { PlayerServerResponse } from '../types/player-server-response'
import { BATTLEMETRICS_API_URL } from './base-url'

export const getPlayerServer = async (
    playerId: string,
    serverId: string
): Promise<PlayerServerResponse | null> => {
    try {
        const urlServerPlayer = `${BATTLEMETRICS_API_URL}/players/${playerId}/servers/${serverId}`
        const responseServerPlayer = await axios.get<PlayerServerResponse>(urlServerPlayer)

        return responseServerPlayer.data
    } catch (error) {
        return null
    }
}
