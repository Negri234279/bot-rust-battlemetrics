import { getPlayerServer } from '../api/player-server'
import { getPlayerSessions } from '../api/player-sessions'
import { getServer } from '../api/server'
import ControlledError from '../errors/controlled.error'

export const getLastServerPlayed = async (playerId: string): Promise<GetLastServerPlayed> => {
    const playerSession = await getPlayerSessions(playerId)
    if (!playerSession) {
        throw new ControlledError('No se encontró información del jugador.')
    }

    const [playerData] = playerSession.data
    const serverId = playerData.relationships.server.data.id
    const playerName = playerData.attributes.name

    const serverPlayerData = await getPlayerServer(playerId, serverId)
    if (!serverPlayerData) {
        throw new ControlledError('No se encontró información del servidor.')
    }

    const status = serverPlayerData.data.attributes.online ? 'conectado' : 'desconectado'
    const { timePlayed, lastSeen } = serverPlayerData.data.attributes

    const serverData = await getServer(serverId)
    if (!serverData) {
        throw new ControlledError('No se encontró información del servidor.')
    }

    const { name: serverName } = serverData.data.attributes

    return {
        player: {
            id: playerId,
            name: playerName,
            status,
        },
        server: {
            name: serverName,
            timePlayed,
            lastSeen,
        },
    }
}

interface GetLastServerPlayed {
    player: {
        id: string
        name: string
        status: string
    }
    server: {
        name: string
        timePlayed: number
        lastSeen: Date
    }
}
