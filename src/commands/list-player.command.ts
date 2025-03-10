import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'

import { container } from '../configs/container'
import TYPES from '../configs/types'
import ControlledError from '../errors/controlled.error'
import { BattlemetricsRepository } from '../repositories/battlemetrics.repository'
import { Command } from '../types/command'

const battlemetricsRepositoryImpl = container.get<BattlemetricsRepository>(
    TYPES.BattlemetricsRepository
)

const commmand: Command = {
    data: new SlashCommandBuilder()
        .setName('list-player')
        .setDescription('Mostrar lista de seguimiento'),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const discord_group_id = interaction.guild.id

        const players = await battlemetricsRepositoryImpl.find(discord_group_id)
        if (!players.length) {
            throw new ControlledError('No hay jugadores en la lista')
        }

        const embed = new EmbedBuilder().setTitle('Lista de seguimiento').setColor('#0099ff')

        for (const player of players) {
            let text = `BattlemetricsId: ${player.battlemetrics_id}`

            if (player.steam_id) {
                const profileurl = `https://steamcommunity.com/profiles/${player.steam_id}`
                text += `\nSteamId: [${player.steam_id}](${profileurl})`
            }

            if (player.discord_id) {
                text += `\nDiscordId: ${player.discord_id}`
            }

            embed.addFields({
                name: player.alias,
                value: text,
                inline: true,
            })
        }

        await interaction.reply({ embeds: [embed] })
    },
}

export default commmand
