import { Guild } from "@prisma/client";
import { Model } from "./model.js";
import { prisma } from "../prisma.client.js";

export class MGuild extends Model {
    protected prismaModel = "guild"

    static async findByDiscordGuildId(discord_guild_id: string): Promise<Guild> {
        const condition = { where: { discord_guild_id } }
        return await prisma.guild.findFirst(condition)
    }
}