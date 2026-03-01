import { User } from "./auth.model";
import { IUserCreateInput } from "./auth.interface";
import bcrypt from "bcrypt";

const createUser = async (payload: Partial<IUserCreateInput>) => {
    const { fullName, email, password, ...rest } = payload;
    const isUserExist = await User.findOne({ email })

    if (isUserExist) {
        throw new Error("User Already Exist with this email")
    }

    const hashPassword = await bcrypt.hash(password as string, 10)

    const user = await User.create({
        fullName,
        email,
        password: hashPassword,
        ...rest
    })
    return user
}


export const UserServices = {
    createUser
}