const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const BattlemetricsRepositoryImpl = require('../repositories/battlemetrics.repository')
const ControlledError = require('../errors/controlled.error')

const battlemetricsRepositoryImpl = new BattlemetricsRepositoryImpl()

const commandName = 'list-player'

module.exports = {
    commandName,
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription('Mostrar lista de seguimiento'),
    /** * @param {import("discord.js").ChatInputCommandInteraction} interaction */
    execute: async (interaction) => {
        const discordGroupId = interaction.guild.id

        const players = await battlemetricsRepositoryImpl.getUsers(discordGroupId)
        if (!players.length) {
            throw new ControlledError('No hay jugadores en la lista')
        }

        const embed = new EmbedBuilder().setTitle('Lista de seguimiento').setColor('#0099ff')

        for (const player of players) {
            embed.addFields({
                name: player.alias,
                value: `ID: ${player.id}`,
                inline: true,
            })
        }

        await interaction.reply({ embeds: [embed] })
    },
}
