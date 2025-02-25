import { default as axios } from 'axios'

import { STEAM_API_KEY } from '../configs/env'
import { SteamPlayerResponse } from '../types/steam-user-response'
import { STEAM_API_URL } from './base-url'

export const getSteamUser = async (steamId: string): Promise<SteamPlayerResponse | null> => {
    try {
        const url = `${STEAM_API_URL}/ISteamUser/GetPlayerSummaries/v0002`
        const res = await axios.get<SteamPlayerResponse>(url, {
            params: {
                key: STEAM_API_KEY,
                steamids: steamId,
            },
        })

        return res.data
    } catch (error) {
        return null
    }
}
