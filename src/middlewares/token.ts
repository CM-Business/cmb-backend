import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { MUser } from '../models/mUser.js';
import { User } from '../types/index.js';

function cookieExtractor(req) {
    var token = null;
    if (req.cookies) {
        token = req.cookies['access_token'];
    }
    return token;
};


async function verifyToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const user: User = await axios.get(`${process.env.DISCORD_API_BASE_URL}/users/@me`, {
            headers: {
                Authorization: `Bearer ${cookieExtractor(req)}`,
            },
        }).then((res) => res.data);

        if (!user) {
            return res.redirect('/auth');
        }

        req.user = await MUser.findByEmail(user.email);
        next();
    } catch (error) {
        return res.redirect('/auth');
    }
}

export { verifyToken }