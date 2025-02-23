import { default as axios } from 'axios'
import type { ServerResponse } from '../types/servers-response'
import { BATTLEMETRICS_API_URL } from './base-url'

export const getServer = async (serverId: string): Promise<ServerResponse | null> => {
    try {
        const urlServer = `${BATTLEMETRICS_API_URL}/servers/${serverId}`
        const responseServer = await axios.get<ServerResponse>(urlServer)

        return responseServer.data
    } catch (error) {
        return null
    }
}
