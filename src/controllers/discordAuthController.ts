import { Request, Response } from "express";

export class DiscordAuthController {
    static handle(request: Request, response: Response): Promise<Response> {
        request
        
        try {
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}