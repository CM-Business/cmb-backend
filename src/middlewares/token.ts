import { Request, Response, NextFunction } from 'express';
import { MUser } from '../models/mUser.js';
import { User } from '../types/index.js';
import { discordUserInfo } from '../helpers/discord/index.js';

function cookieExtractor(req): string {
    let token = null;
    if (req.cookies) {
        token = req.cookies['access_token'];
    }
    return token;
};


async function verifyToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const token = cookieExtractor(req);

        const user: User = await discordUserInfo(token);

        if (!user) {
            return res.redirect('/auth');
        }

        req.user = await MUser.findByEmail(user.email)
        req.user.accessToken = token;


        next();
    } catch (error) {
        return res.redirect('/auth');
    }
}

export { verifyToken }