import { discordUserGuilds } from "../../../helpers/discord/index.js";
import { Guilds } from "../../../types/index.js";

export class GetDiscordGuildsUseCase {
    async execute(token: string): Promise<Array<Guilds>> {
        return await discordUserGuilds(token);
    }
}
