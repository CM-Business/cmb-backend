import { Strategy } from 'passport-discord'
import passport from 'passport'
function discord(): void {
    const strategy = new Strategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: "/auth/redirect",
            scope: ['identify', 'email', 'guilds']
        }, async (_, refreshToken, profile, done) => {
            profile.refreshToken = refreshToken;

            try {
                done(null, profile)
            } catch (err) {
                done(err, null)
            }
        }
    )

    passport.use(strategy)
}

export { discord }