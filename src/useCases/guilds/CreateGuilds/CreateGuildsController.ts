import { Request, Response } from "express";
import { CreateGuildUseCase } from "./CreateGuildsUseCase.js";

export class CreateGuildController {
    constructor(private createGuildUseCase: CreateGuildUseCase = new CreateGuildUseCase) { }

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { guilds } = request.body;
            this.createGuildUseCase.execute(guilds, request.user)
            response.status(200).json({});
        } catch (error) {
            response.status(400).json({});
        }
    }
}