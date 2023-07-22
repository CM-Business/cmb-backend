import { Strategy } from 'passport-discord'
import passport from 'passport'
function discord(): void {
    const strategy = new Strategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: "/auth/redirect",
            scope: ['identify']
        }, async (accessToken, refreshToken, profile, done) => {
            console.log(accessToken, refreshToken, profile, done)
            try {
                done(null, { oi: "oi" })
            } catch (err) {
                done(err, null)
            }
        }
    )

    passport.use(strategy)
}

export { discord }