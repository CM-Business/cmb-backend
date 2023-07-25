import { User } from "@prisma/client";
import { MUser } from "../../../models/mUser.js";

export class CreateUserUseCase {
    constructor(private userModel: MUser = new MUser) { }

    async execute(data: User): Promise<User> {
        if (data.id) {
            delete data.id
        }
        
        return await this.userModel.store<User>(data)
    }
}