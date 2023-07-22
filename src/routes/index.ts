import { Router } from 'express';
import { authRouterHandle } from './auth.js';
const router = Router();
authRouterHandle(router);
export { router }