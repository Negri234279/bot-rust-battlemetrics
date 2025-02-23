const formatLastSeen = (lastSeen: Date): string => {
    const date = new Date(lastSeen)
    const formattedDate = date.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })

    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    const months = Math.floor(diffInSeconds / (3600 * 24 * 30))
    const days = Math.floor(diffInSeconds / (3600 * 24))
    const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((diffInSeconds % 3600) / 60)

    let timeAgo = ''

    if (months > 0) {
        timeAgo += `${months}m `
    }

    if (days > 0) {
        timeAgo += `${days}d `
    }

    if (hours > 0) {
        timeAgo += `${hours}h`
    }

    if (minutes > 0) {
        timeAgo += ` ${minutes}m`
    }

    if (!timeAgo) {
        timeAgo = 'hace unos segundos'
    } else {
        timeAgo = `hace ${timeAgo.trim()}`
    }

    return `Última vez visto: ${formattedDate}, ${timeAgo}`
}

export default formatLastSeen