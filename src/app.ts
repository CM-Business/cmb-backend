import express from 'express'
import { router } from './routes/index.js'
import { handlePassport } from './passport.js'
import session from 'express-session'
import { createSessionObject } from './session.js'

const app = express()
app.use(session(createSessionObject()))
app.use(express.json())
app.use(router)
handlePassport(app)
export { app }