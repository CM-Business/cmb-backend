import axios, { AxiosPromise } from "axios";
import { Guilds, User } from "../../types/index.js";


async function base(url: string, token: string): AxiosPromise {
    return axios.get(`${process.env.DISCORD_API_BASE_URL + url}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

async function discordUserInfo(token: string): Promise<User> {
    return await base(`/users/@me`, token).then((res) => res.data)
}

async function discordUserGuilds(token: string): Promise<Array<Guilds>> {
    return await base(`/users/@me/guilds`, token).then((res) => res.data)
}

export { discordUserGuilds, discordUserInfo }