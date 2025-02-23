import { Interaction, SlashCommandBuilder } from 'discord.js'

export interface Command {
    commandName: string
    data: SlashCommandBuilder
    execute: (interaction: Interaction) => Promise<void>
}

export interface LoadCommands {
    commands: Map<string, Command>
    data: SlashCommandBuilder[]
}
