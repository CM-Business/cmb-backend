import crypto from 'crypto'

function createSessionObject() {
    return {
        secret: crypto.randomBytes(64).toString('hex'),
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true }
    }
}

export { createSessionObject }