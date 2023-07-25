import passport from 'passport'
import { OnAuthController } from "../useCases/user/OnAuth/OnAuthController.js";
import { Request, Response } from "express";

function authRouterHandle(router): void {
    router.get("/auth", passport.authenticate("discord"));

    router.get('/auth/redirect', passport.authenticate('discord', {
        failureRedirect: '/'
    }), async (request: Request, response: Response) => {
        return await (new OnAuthController).handle(request, response)
    });
}

export { authRouterHandle }