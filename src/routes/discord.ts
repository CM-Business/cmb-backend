import { Request, Response } from "express";
import { verifyToken } from "../middlewares/token.js";
import { GetDiscordGuildsController } from "../useCases/guilds/GetDiscordGuilds/GetDiscordGuildsController.js";


function discordRouteHandler(router): void {
    router.get("/discord/guilds", verifyToken, async (request: Request, response: Response) => {
        return await (new GetDiscordGuildsController).handle(request, response)
    });
}

export { discordRouteHandler }