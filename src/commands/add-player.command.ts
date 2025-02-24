import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { getPlayer } from '../api/player'
import { container } from '../configs/container'
import TYPES from '../configs/types'
import { BattlemetricsRepository } from '../repositories/battlemetrics.repository'
import { Command } from '../types/command'
import { User } from '../types/user'

const battlemetricsRepositoryImpl = container.get<BattlemetricsRepository>(
    TYPES.BattlemetricsRepository
)

const commmand: Command = {
    data: new SlashCommandBuilder()
        .setName('add-player')
        .setDescription('Añade un jugador de Rust a la lista de seguimiento')
        .addStringOption((option) =>
            option
                .setName('id')
                .setDescription('ID del jugador en BattleMetrics')
                .setRequired(true)
                .setAutocomplete(true)
        )
        .addStringOption((option) =>
            option
                .setName('alias')
                .setDescription('Alias o nombre personalizado para el jugador')
                .setRequired(false)
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const battlemetrics_id = interaction.options.getString('id')
        const playerAlias = interaction.options.getString('alias')
        const discord_group_id = interaction.guild.id

        const alias = playerAlias || (await getPlayer(battlemetrics_id)).data.attributes.name

        const playerFound = await battlemetricsRepositoryImpl.findOne({
            battlemetrics_id,
            discord_group_id,
        })

        const user: User = {
            battlemetrics_id,
            alias,
            discord_group_id,
        }

        playerFound
            ? await battlemetricsRepositoryImpl.update(user)
            : await battlemetricsRepositoryImpl.create(user)

        const msg = playerFound
            ? `El jugador ${battlemetrics_id} (${alias}) ya estaba en la lista de seguimiento, se ha actualizado su alias.`
            : `El jugador ${battlemetrics_id} (${alias}) fue añadido a la lista de seguimiento.`

        await interaction.reply(msg)
    },
}

export default commmand
