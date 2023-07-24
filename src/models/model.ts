import { prisma } from "../prisma.client.js";

export class Model {
    protected table: string = ""
    async all() {
        return await prisma[this.table].findMany()
    }

    async store(data: any) {
        if (data.id) {
            delete data.id
        }

        const allowed = Object.keys(prisma[this.table].fields);
        for (let field in data) {
            if (!allowed.includes(field)) {
                delete data[field]
            }
        }

        return await prisma[this.table].create({
            data
        })
    }
}