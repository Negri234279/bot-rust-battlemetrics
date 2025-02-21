export interface PlayerSessionsResponse {
    data: Session[]
    links: Links
    included: any[]
}

export interface Session {
    type: 'session'
    id: string
    attributes: AttributesSession
    relationships: RelationshipsSession
}

export interface AttributesSession {
    start: Date
    stop: Date
    firstTime: boolean
    name: string
    private: boolean
}

export type DataRelationshipsSession<T> = {
    data: {
        type: T
        id: string
    }
}

export interface RelationshipsSession {
    server: DataRelationshipsSession<'server'>
    player: DataRelationshipsSession<'player'>
    identifiers: DataRelationshipsSession<'identifier'>
}

export interface Links {
    next: string
}
