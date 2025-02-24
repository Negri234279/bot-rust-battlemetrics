import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import formatLastSeen from '../helpers/formatLastSeen.helper'
import formatSeconds from '../helpers/formatSeconds.helper'
import { getLastServerPlayed } from '../services/player.service'
import { Command } from '../types/command'

const command: Command = {
    data: new SlashCommandBuilder()
        .setName('player')
        .setDescription('Obtiene información de un jugador de Rust')
        .addStringOption((option) =>
            option
                .setName('id')
                .setDescription('ID del jugador en BattleMetrics')
                .setRequired(true)
                .setAutocomplete(true)
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const battlemetrics_id = interaction.options.getString('id')

        const { player, server } = await getLastServerPlayed(battlemetrics_id)

        const embed = new EmbedBuilder()
            .setTitle(`Último servidor jugado de ${player.name} (${player.id})`)
            .setDescription(
                `${formatSeconds(server.timePlayed)}\n${formatLastSeen(server.lastSeen)}`
            )
            .setColor('#0099ff')
            .addFields({
                name: server.name,
                value: `Estado: ${player.status}`,
                inline: true,
            })

        await interaction.reply({ embeds: [embed] })
    },
}

export default command
