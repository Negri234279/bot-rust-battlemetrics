const { default: axios } = require('axios')
const { BATTLEMETRICS_API_URL } = require("./base-url")

/**
 * 
 * @param {string} playerId 
 * @returns {Promise<import("../types/player-sessions-response").PlayerSessionsResponse | null>}
 */
const getPlayerSessions = async (playerId) => {
    try {
        const url = `${BATTLEMETRICS_API_URL}/players/${playerId}/relationships/sessions`
        const response = await axios.get(url)
        
        return response.data
    } catch (error) {
        return null
    }
}

module.exports = getPlayerSessions