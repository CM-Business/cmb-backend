import { Prisma, UserGuild } from "@prisma/client";
import { prisma } from "../prisma.client.js";
import { Model } from "./model.js";

export class MUserGuild extends Model {
    protected prismaModel = "userGuild"

    static async find(obj: UserGuild | Prisma.UserWhereInput): Promise<UserGuild> {
        const condition = { where: obj }
        return await prisma.userGuild.findFirst(condition)
    }
}