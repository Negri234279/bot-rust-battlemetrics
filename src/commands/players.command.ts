import {
    APIEmbedField,
    ChatInputCommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder,
} from 'discord.js'

import { container } from '../configs/container'
import TYPES from '../configs/types'
import ControlledError from '../errors/controlled.error'
import formatLastSeen from '../helpers/formatLastSeen.helper'
import formatSeconds from '../helpers/formatSeconds.helper'
import { BattlemetricsRepository } from '../repositories/battlemetrics.repository'
import { getLastServerPlayed } from '../services/player.service'
import { Command } from '../types/command'

const battlemetricsRepositoryImpl = container.get<BattlemetricsRepository>(
    TYPES.BattlemetricsRepository
)

const command: Command = {
    data: new SlashCommandBuilder()
        .setName('players')
        .setDescription('Obtiene información de la lista de seguimiento'),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const discord_group_id = interaction.guild.id

        const players = await battlemetricsRepositoryImpl.find(discord_group_id)
        if (!players.length) {
            throw new ControlledError('No hay jugadores en la lista')
        }

        const promises = players.map(async (playerFound) => {
            const { battlemetrics_id, alias, steam_id, discord_id } = playerFound
            const { player, server } = await getLastServerPlayed(battlemetrics_id)

            const title =
                player.name === alias
                    ? `Último servidor jugado de ${player.name} (${player.id})`
                    : `Último servidor jugado de ${player.name} alias ${alias} (${player.id})`

            let description = `${formatSeconds(server.timePlayed)}`
            description += `\n${formatLastSeen(server.lastSeen)}`

            const fields: APIEmbedField[] = [
                {
                    name: server.name,
                    value: `Estado: ${player.status}`,
                    inline: true,
                },
            ]

            const battlemetricsUrl = `https://www.battlemetrics.com/players/${player.id}`

            let info = `BattlemetricsId: [${player.id}](${battlemetricsUrl})`

            if (steam_id) {
                const profileurl = `https://steamcommunity.com/profiles/${steam_id}`
                info += `\nSteamId: [${steam_id}](${profileurl})`
            }

            if (discord_id) {
                info += `\nDiscordId: ${discord_id}`
            }

            if (info) {
                fields.push({
                    name: 'Otra información',
                    value: info,
                    inline: true,
                })
            }

            return new EmbedBuilder()
                .setTitle(title)
                .setDescription(description)
                .setColor('#0099ff')
                .addFields(...fields)
        })

        const embeds = await Promise.all(promises)

        await interaction.reply({ embeds })
    },
}

export default command
