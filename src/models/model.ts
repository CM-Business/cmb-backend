import { prisma } from "../prisma.client.js";
import { User, Vote } from '@prisma/client'

type GenericInterface = User | Vote

export abstract class Model {
    protected table = ""
    async all(): Promise<Array<GenericInterface>> {
        return await prisma[this.table].findMany()
    }

    async store<T>(data: GenericInterface): Promise<T> {
        if (data.id) {
            delete data.id
        }

        const allowed = Object.keys(prisma[this.table].fields);
        for (const field in data) {
            if (!allowed.includes(field)) {
                delete data[field]
            }
        }

        return await prisma[this.table].create({
            data
        })
    }
}