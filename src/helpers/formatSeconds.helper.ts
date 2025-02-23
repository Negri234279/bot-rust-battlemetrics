const formatSeconds = (time: number): string => {
    const hours = Math.floor(time / 3600)
    const remainingSeconds = time % 3600
    const minutes = Math.floor(remainingSeconds / 60)

    const msg = hours > 0 ? `${hours}h ${minutes}m` : minutes > 0 ? `${minutes}m` : `${time}s`

    return `Tiempo jugado: ${msg} recientes`
}

export default formatSeconds
