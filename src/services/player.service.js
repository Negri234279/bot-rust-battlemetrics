const getPlayerServer = require('../api/player-server')
const getPlayerSessions = require('../api/player-sessions')
const getServer = require('../api/server')
const ControlledError = require('../errors/controlled.error')

const getLastServerPlayed = async (playerId) => {
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

module.exports = { getLastServerPlayed }
