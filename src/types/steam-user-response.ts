export interface SteamPlayerResponse {
    response: {
        players: SteamPlayer[]
    }
}

export interface SteamPlayer {
    steamid: string
    communityvisibilitystate: 1 | 3
    profilestate: number
    personaname: string
    profileurl: string
    avatar: string
    avatarmedium: string
    avatarfull: string
    avatarhash: string
    personastate: 0 | 1 | 2 | 3 | 4 | 5 | 6
    realname: string
    primaryclanid: string
    timecreated: number
    personastateflags: number
    loccountrycode?: string
    locstatecode?: string
    loccityid?: number
    gameextrainfo?: string
    gameid?: string
    lastlogoff?: number
}

export const mapSteamPlayerStates = {
    0: 'Desconectado',
    1: 'Conectado',
    2: 'Ocupado',
    3: 'Ausente',
    4: 'Dormido',
    5: 'Buscando comerciar',
}