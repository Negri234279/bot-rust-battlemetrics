export interface ServerResponse {
    data: ServerResponseData
    included: any[]
}

export interface ServerResponseData {
    type: string
    id: string
    attributes: AttributesServer
    relationships: RelationshipsServer
}

export interface AttributesServer {
    id: string
    name: string
    address: string
    ip: string
    port: number
    players: number
    maxPlayers: number
    rank: number
    location: number[]
    status: string
    details: DetailsServer
    private: boolean
    createdAt: Date
    updatedAt: Date
    portQuery: number
    country: string
    queryStatus: string
}

export interface DetailsServer {
    tags: string[]
    official: boolean
    rust_type: string
    map: string
    environment: string
    rust_build: string
    rust_ent_cnt_i: number
    rust_fps: number
    rust_fps_avg: number
    rust_gc_cl: number
    rust_gc_mb: number
    rust_hash: string
    rust_headerimage: string
    rust_mem_pv: null
    rust_mem_ws: null
    pve: boolean
    rust_uptime: number
    rust_url: string
    rust_world_seed: number
    rust_world_size: number
    rust_world_levelurl: string
    rust_maps: RustMaps
    rust_description: string
    rust_modded: boolean
    rust_queued_players: number
    rust_gamemode: string
    rust_born: Date
    rust_last_ent_drop: Date
    rust_last_seed_change: Date
    rust_last_wipe: Date
    rust_last_wipe_ent: number
    rust_settings_source: string
    rust_settings: RustSettings
    rust_wipes: RustWipe[]
    rust_next_wipe: Date
    rust_next_wipe_map: Date
    rust_next_wipe_bp: Date
    serverSteamId: string
}

export interface RustMaps {
    seed: number
    size: number
    url: string
    thumbnailUrl: string
    monumentCount: number
    barren: boolean
    updatedAt: Date
    mapUrl: string
    biomePercentages: BiomePercentages
    islands: number
    mountains: number
    iceLakes: number
    rivers: number
    monumentCounts: { [key: string]: number }
    monuments: string[]
}

export interface BiomePercentages {
    s: number
    d: number
    f: number
    t: number
}

export interface RustSettings {
    upkeep: number
    version: number
    teamUILimit: number
    groupLimit: number
    timeZone: string
    rates: Rates
    blueprints: boolean
    kits: boolean
    decay: number
    decayScale: number
    forceWipeType: string
    wipes: Wipe[]
}

export interface Rates {
    gather: number
    craft: number
    component: number
    scrap: number
}

export interface Wipe {
    weeks: number[]
    days: string[]
    type: string
    hour: number
    minute: number
}

export interface RustWipe {
    type: string
    timestamp: Date
}

export interface RelationshipsServer {
    game: Game
}

export interface Game {
    data: GameData
}

export interface GameData {
    type: string
    id: string
}
