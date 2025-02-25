import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import { getSteamUser } from '../api/steam-user'
import { Command } from '../types/command'
import ControlledError from '../errors/controlled.error'
import formatLastSeen from '../helpers/formatLastSeen.helper'
import { mapSteamPlayerStates } from '../types/steam-user-response'

const command: Command = {
    data: new SlashCommandBuilder()
        .setName('steam-profile')
        .setDescription('Obtiene información de un jugador de Steam')
        .addStringOption((option) =>
            option
                .setName('id')
                .setDescription('ID del jugador en Steam')
                .setRequired(true)
                .setAutocomplete(true)
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const steamId = interaction.options.getString('id')

        const data = await getSteamUser(steamId)
        if (!data) {
            throw new ControlledError('No se pudo obtener la información del jugador')
        }

        const [player] = data.response.players

        const title = player.realname
            ? `Perfil de Steam de ${player.realname} (${player.personaname})`
            : `Perfil de Steam de (${player.personaname})`

        const state = mapSteamPlayerStates[player.personastate] || 'Desconocido'

        let description = `Estado: ${state}`

        if (player.realname) {
            description += `\nSteamId: [${player.steamid}](${player.profileurl})`
        }

        const privacity = player.communityvisibilitystate === 1 ? 'Privado' : 'Público'
        description += `\nPerfil: ${privacity}`

        if (player.gameextrainfo) {
            description += `\nJugando a: ${player.gameextrainfo}`
        }

        if (player.timecreated) {
            const date = new Date(player.timecreated * 1000)
            description += `\nCuenta creada: ${date.toLocaleDateString()}`
        }

        if (player.lastlogoff) {
            const date = new Date(player.lastlogoff * 1000)
            description += `\n${formatLastSeen(date)}`
        }

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setThumbnail(player.avatarfull)
            .setColor('#0099ff')

        await interaction.reply({ embeds: [embed] })
    },
}

export default command
