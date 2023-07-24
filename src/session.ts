import crypto from 'crypto'

type Cookie = {
    secure: boolean
}

type SessionObject = {
    secret: string,
    resave: boolean,
    saveUninitialized: boolean,
    cookie: Cookie
}

function createSessionObject(): SessionObject {
    return {
        secret: crypto.randomBytes(64).toString('hex'),
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true }
    }
}

export { createSessionObject }