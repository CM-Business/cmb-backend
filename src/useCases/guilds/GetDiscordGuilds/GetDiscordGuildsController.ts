import { Request, Response } from "express";
import { GetDiscordGuildsUseCase } from "./GetDiscordGuildsUseCase.js";

export class GetDiscordGuildsController {
    constructor(private getDisordGuildsUseCase: GetDiscordGuildsUseCase = new GetDiscordGuildsUseCase) { }

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { accessToken } = request.user;

            response.status(200).json({ data: await this.getDisordGuildsUseCase.execute(accessToken) });
        } catch (error) {
            response.status(400).json({});
        }
    }
}