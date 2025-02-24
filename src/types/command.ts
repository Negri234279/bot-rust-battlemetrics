import { Interaction, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from 'discord.js'

export interface Command {
    data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder
    execute: (interaction: Interaction) => Promise<void>
}

export interface LoadCommands {
    commands: Map<string, Command>
    data: SlashCommandBuilder[]
}
