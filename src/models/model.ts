import { prisma } from "../prisma.client.js";
import { User, Vote, Guild, UserGuild } from '@prisma/client'

type GenericInterface = User | Vote | Guild | UserGuild

export abstract class Model {
    protected prismaModel = ""
    async all(): Promise<Array<GenericInterface>> {
        return await prisma[this.prismaModel].findMany()
    }

    async store<T>(data: GenericInterface): Promise<T> {
        const allowed = Object.keys(prisma[this.prismaModel].fields);
        for (const field in data) {
            if (!allowed.includes(field)) {
                delete data[field]
            }
        }

        return await prisma[this.prismaModel].create({
            data
        })
    }
}