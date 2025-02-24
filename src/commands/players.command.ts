import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
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

        const promises = players.map(async ({ battlemetrics_id, alias }) => {
            const { player, server } = await getLastServerPlayed(battlemetrics_id)

            return new EmbedBuilder()
                .setTitle(`Último servidor jugado de ${player.name} (${player.id}) alias ${alias}`)
                .setDescription(
                    `${formatSeconds(server.timePlayed)}\n${formatLastSeen(server.lastSeen)}`
                )
                .setColor('#0099ff')
                .addFields({
                    name: server.name,
                    value: `Estado: ${player.status}`,
                    inline: true,
                })
        })

        const embeds = await Promise.all(promises)

        await interaction.reply({ embeds })
    },
}

export default command
