import { discord } from "./discord.js";
import passport from 'passport'

function strategies(): void {
    discord()

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}
export { strategies }