import { prisma } from "../prisma.client.js";
import { User } from "@prisma/client";
import { Model } from "./model.js";

export class MUser extends Model {
    protected table = "user"

    static async findByEmail(email: string): Promise<User> {
        const condition = { where: { email } }
        return await prisma.user.findFirst(condition)
    }
}