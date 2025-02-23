import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { getPlayer } from '../api/player'
import { BattlemetricsRepositoryImpl } from '../repositories/battlemetrics.repository'

const battlemetricsRepositoryImpl = new BattlemetricsRepositoryImpl()

const commandName = 'add-player'

const commmand = {
    commandName,
    data: new SlashCommandBuilder()
        .setName(commandName)
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
        const playerId = interaction.options.getString('id')
        const playerAlias = interaction.options.getString('alias')
        const discordGroupId = interaction.guild.id

        const alias = playerAlias || (await getPlayer(playerId)).data.attributes.name

        const playerFound = await battlemetricsRepositoryImpl.getUser(playerId, discordGroupId)

        playerFound
            ? await battlemetricsRepositoryImpl.updateUser({ id: playerId, alias }, discordGroupId)
            : await battlemetricsRepositoryImpl.addUser({ id: playerId, alias }, discordGroupId)

        const msg = playerFound
            ? `El jugador ${playerId} (${alias}) ya estaba en la lista de seguimiento, se ha actualizado su alias.`
            : `El jugador ${playerId} (${alias}) fue añadido a la lista de seguimiento.`

        await interaction.reply(msg)
    },
}

export default commmand
