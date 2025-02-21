const { default: axios } = require('axios')
const { BATTLEMETRICS_API_URL } = require('./base-url')

/**
 *
 * @param {string} playerId
 * @returns {Promise<import('../types/player-response').PlayerResponse | null>}
 */
const getPlayer = async (playerId) => {
    try {
        const urlSession = `${BATTLEMETRICS_API_URL}/players/${playerId}`
        const responseSession = await axios.get(urlSession)
        
        return responseSession.data
    } catch (error) {
        return null
    }
}

module.exports = getPlayer
