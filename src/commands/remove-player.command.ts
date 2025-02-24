import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { container } from '../configs/container'
import TYPES from '../configs/types'
import ControlledError from '../errors/controlled.error'
import { BattlemetricsRepository } from '../repositories/battlemetrics.repository'
import { Command } from '../types/command'

const battlemetricsRepositoryImpl = container.get<BattlemetricsRepository>(
    TYPES.BattlemetricsRepository
)

const command: Command = {
    data: new SlashCommandBuilder()
        .setName('remove-player')
        .setDescription('Elimina un jugador de Rust a la lista de seguimiento')
        .addStringOption((option) =>
            option
                .setName('id')
                .setDescription('ID del jugador en BattleMetrics')
                .setRequired(true)
                .setAutocomplete(true)
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const battlemetrics_id = interaction.options.getString('id')
        const discord_group_id = interaction.guild.id

        const playerFound = await battlemetricsRepositoryImpl.findOne({
            battlemetrics_id,
            discord_group_id,
        })

        if (!playerFound) {
            const msg = `El jugador ${battlemetrics_id} no se encuentra en la lista de seguimiento.`
            throw new ControlledError(msg)
        }

        await battlemetricsRepositoryImpl.remove({ battlemetrics_id, discord_group_id })

        const msg = `El jugador ${playerFound.battlemetrics_id} (${playerFound.alias}) fue eliminado de la lista de seguimiento.`

        await interaction.reply(msg)
    },
}

export default command
