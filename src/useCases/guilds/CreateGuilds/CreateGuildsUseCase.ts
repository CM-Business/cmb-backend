import { Guild, User } from "@prisma/client";
import { MGuild } from "../../../models/mGuild.js";
import { Guilds } from "../../../types/index.js";
import { MUserGuild } from "../../../models/mUserGuild.js";

export class CreateGuildUseCase {
    async execute(guilds: Guilds, user: User): Promise<void> {
        const modelGuild = new MGuild;
        const modelUserGuild = new MUserGuild;
        for (const key in guilds) {
            guilds[key].discord_guild_id = guilds[key].id
            delete guilds[key].id;

            let guild: Guild = (await MGuild.findByDiscordGuildId(guilds[key].discord_guild_id));
            if (!guild) {
                guild = await modelGuild.store(guilds[key]);
            }

            const obj = { user_id: user.id, guild_id: guild.id };
            if (!(await MUserGuild.find(obj))) {
                modelUserGuild.store(obj);
            }
        }
    }
}
