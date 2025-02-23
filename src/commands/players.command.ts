import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import ControlledError from '../errors/controlled.error'
import formatLastSeen from '../helpers/formatLastSeen.helper'
import formatSeconds from '../helpers/formatSeconds.helper'
import { BattlemetricsRepositoryImpl } from '../repositories/battlemetrics.repository'
import { getLastServerPlayed } from '../services/player.service'

const commandName = 'players'

const battlemetricsRepositoryImpl = new BattlemetricsRepositoryImpl()

const command = {
    commandName,
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription('Obtiene información de la lista de seguimiento'),
    execute: async (interaction: ChatInputCommandInteraction) => {
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

export default command
