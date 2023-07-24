import { User } from "@prisma/client";
import { MUser } from "../../../models/mUser.js";

export class CreateUserUseCase {
    constructor(private userModel: MUser = new MUser) { }

    async execute(data: User): Promise<User> {
        return await this.userModel.store<User>(data)
    }
}