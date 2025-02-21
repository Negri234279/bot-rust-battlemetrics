export interface PlayerServerResponse {
    data: PlayerServerResponseData
}

export interface PlayerServerResponseData {
    type: 'playerServerInformation'
    id: string
    attributes: AttributesPlayerServer
}

export interface AttributesPlayerServer {
    firstSeen: Date
    lastSeen: Date
    timePlayed: number
    online: boolean
}
