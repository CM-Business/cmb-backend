import passport from 'passport'
import { OnAuthController } from "../useCases/user/OnAuth/OnAuthController.js";
import { Request, Response } from "express";
import { verifyToken } from "../middlewares/token.js";


function authRouterHandle(router): void {
    router.get("/auth", passport.authenticate("discord"));

    router.get("/testando", verifyToken, (request: Request, response: Response) => {
        request

        response.send("")
    });

    router.get('/auth/redirect', passport.authenticate('discord', {
        failureRedirect: '/'
    }), async (request: Request, response: Response) => {
        return await (new OnAuthController).handle(request, response)
    });
}

export { authRouterHandle }