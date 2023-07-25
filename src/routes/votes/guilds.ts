import { Request, Response } from "express";
import { verifyToken } from "../../middlewares/token.js";
import { CreateGuildController } from "../../useCases/guilds/CreateGuilds/CreateGuildsController.js";

function guildsRouteHandler(router): void {
    router.post("/votes/guilds-create", verifyToken, async (request: Request, response: Response) => {
        return await (new CreateGuildController).handle(request, response)
    });
}

export { guildsRouteHandler }