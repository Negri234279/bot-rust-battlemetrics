export interface PlayerResponse {
    data: PlayerResponseData
    included: any[]
}

export interface PlayerResponseData {
    type: 'player'
    id: string
    attributes: AttributesPlayer
    relationships: Record<string, any>
}

export interface AttributesPlayer {
    id: string
    name: string
    private: boolean
    positiveMatch: boolean
    createdAt: Date
    updatedAt: Date
}
