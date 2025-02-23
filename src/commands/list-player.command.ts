import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import ControlledError from '../errors/controlled.error'
import { BattlemetricsRepositoryImpl } from '../repositories/battlemetrics.repository'

const battlemetricsRepositoryImpl = new BattlemetricsRepositoryImpl()

const commandName = 'list-player'

const commmand = {
    commandName,
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription('Mostrar lista de seguimiento'),
    execute: async (interaction: ChatInputCommandInteraction) => {
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

export default commmand
