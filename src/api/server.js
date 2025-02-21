const { default: axios } = require('axios')
const { BATTLEMETRICS_API_URL } = require('./base-url')

/**
 * @param {string} serverId
 * @returns {Promise<import("../types/servers-response").ServerResponse>}
 */
const getServer = async (serverId) => {
    try {
        const urlServer = `${BATTLEMETRICS_API_URL}/servers/${serverId}`
        const responseServer = await axios.get(urlServer)

        return responseServer.data
    } catch (error) {
        return null
    }
}

module.exports = getServer
