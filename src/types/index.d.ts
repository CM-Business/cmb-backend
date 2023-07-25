export type Vote = {
    id: number
}

export type User = {
    id: number,
    username: string,
    avatar?: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
    votes: Array<Vote>,
    receivedVotes: Array<Vote>
}

export type Guilds = {
    id: string,
    name: string,
    icon: string,
    owner: boolean,
    permissions: number,
    permissions_new: string
}

export type UserGuild = {
    user_id: number,
    guild_id: number
}