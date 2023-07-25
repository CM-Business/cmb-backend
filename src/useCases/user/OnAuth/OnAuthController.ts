import { Request, Response } from "express";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase.js";
import { MUser } from "../../../models/mUser.js";

export class OnAuthController {
    constructor(private createUserUseCase: CreateUserUseCase = new CreateUserUseCase) { }

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { accessToken, refreshToken, email } = request.user;

            const cookieConfig = { httpOnly: true, secure: true, maxAge: 3600000 };
            response.cookie('access_token', accessToken, cookieConfig)
            response.cookie('refresh_token', refreshToken, cookieConfig)

            if (!(await MUser.findByEmail(email))) {
                await this.createUserUseCase.execute(request.user)
            }

            response.redirect(process.env.FRONTEND_URL + "/dashboard");
        } catch (error) {
            console.log(error)
            response.status(400).json({});
        }
    }
}