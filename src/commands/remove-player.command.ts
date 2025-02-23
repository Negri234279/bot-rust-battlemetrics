import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import ControlledError from '../errors/controlled.error'
import { BattlemetricsRepositoryImpl } from '../repositories/battlemetrics.repository'

const battlemetricsRepositoryImpl = new BattlemetricsRepositoryImpl()

const commandName = 'remove-player'

const command = {
    commandName,
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription('Elimina un jugador de Rust a la lista de seguimiento')
        .addStringOption((option) =>
            option
                .setName('id')
                .setDescription('ID del jugador en BattleMetrics')
                .setRequired(true)
                .setAutocomplete(true)
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const playerId = interaction.options.getString('id')
        const discordGroupId = interaction.guild.id

        const playerFound = await battlemetricsRepositoryImpl.getUser(playerId, discordGroupId)
        if (!playerFound) {
            throw new ControlledError(
                `El jugador ${playerId} no se encuentra en la lista de seguimiento.`
            )
        }

        await battlemetricsRepositoryImpl.removeUser(playerId, discordGroupId)

        const msg = `El jugador ${playerFound.id} (${playerFound.alias}) fue eliminado de la lista de seguimiento.`

        await interaction.reply(msg)
    },
}

export default command