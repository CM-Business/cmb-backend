import { Request, Response } from "express";
import passport from 'passport'

function authRouterHandle(router): void {
    router.get("/auth", passport.authenticate("discord"));

    router.get('/auth/redirect', passport.authenticate('discord', {
        failureRedirect: '/'
    }), function (request: Request, response: Response) {
        request

        console.log("Foi chamado a rota auth/redirect com o método GET")

        response.json({ oi: 'oi' });
    });
}

export { authRouterHandle }