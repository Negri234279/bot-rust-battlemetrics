const { default: axios } = require('axios')
const { BATTLEMETRICS_API_URL } = require('./base-url')

/**
 *
 * @param {string} playerId
 * @param {string} serverId
 * @returns {Promise<import('../types/player-server-response').PlayerServerResponse | null>}
 */
const getPlayerServer = async (playerId, serverId) => {
    try {
        const urlServerPlayer = `${BATTLEMETRICS_API_URL}/players/${playerId}/servers/${serverId}`
        const responseServerPlayer = await axios.get(urlServerPlayer)

        return responseServerPlayer.data
    } catch (error) {
        return null
    }
}

module.exports = getPlayerServer
