const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const { getLastServerPlayed } = require('../services/player.service')
const formatLastSeen = require('../helpers/formatLastSeen.helper')
const formatSeconds = require('../helpers/formatSeconds.helper')
const BattlemetricsRepositoryImpl = require('../repositories/battlemetrics.repository')
const ControlledError = require('../errors/controlled.error')

const commandName = 'players'

const battlemetricsRepositoryImpl = new BattlemetricsRepositoryImpl()

module.exports = {
    commandName,
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription('Obtiene información de la lista de seguimiento'),
    /** * @param {import("discord.js").ChatInputCommandInteraction} interaction */
    execute: async (interaction) => {
        const discordGroupId = interaction.guild.id

        const players = await battlemetricsRepositoryImpl.getUsers(discordGroupId)
        if (!players.length) {
            throw new ControlledError('No hay jugadores en la lista')
        }

        const promises = players.map(async ({ id, alias }) => {
            const { player, server } = await getLastServerPlayed(id)

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
