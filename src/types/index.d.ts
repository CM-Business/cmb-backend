export type Vote = {
    id: number
}

export type User = {
    id: number,
    username: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
    votes: Array<Vote>,
    receivedVotes: Array<Vote>
}