import { strategies } from "./strategies/index.js";
import passport from 'passport'

function handlePassport(app): void {
    strategies();
    app.use(passport.initialize())
    app.use(passport.session());
}

export { handlePassport }