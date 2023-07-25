import { Router } from 'express';
import { authRouterHandle } from './auth.js';
import { discordRouteHandler } from './discord.js';
import { guildsRouteHandler } from './votes/guilds.js';
const router = Router();
authRouterHandle(router);
discordRouteHandler(router)
guildsRouteHandler(router)
export { router }