const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const { getLastServerPlayed } = require('../services/player.service')
const formatLastSeen = require('../helpers/formatLastSeen.helper')
const formatSeconds = require('../helpers/formatSeconds.helper')

const commandName = 'player'

module.exports = {
    commandName,
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription('Obtiene información de un jugador de Rust')
        .addStringOption((option) =>
            option
                .setName('id')
                .setDescription('ID del jugador en BattleMetrics')
                .setRequired(true)
                .setAutocomplete(true)
        ),
    /** * @param {import("discord.js").ChatInputCommandInteraction} interaction */
    execute: async (interaction) => {
        const playerId = interaction.options.getString('id')

        const { player, server } = await getLastServerPlayed(playerId)

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
