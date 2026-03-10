import { User } from "./auth.model";
import { IUserCreateInput } from "./auth.interface";
import bcrypt from 'bcryptjs';
import AppError from "../../helper/AppError";
import { jwtHelper } from "../../helper/jwtHelper";
import { Secret } from "jsonwebtoken";

const createUser = async (payload: Partial<IUserCreateInput>) => {
    const { fullName, email, password, ...rest } = payload;
    const isUserExist = await User.findOne({ email })

    if (isUserExist) {
        throw new AppError(400, "User Already Exist with this email")
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


const userLogin = async (payload: { email: string, password: string }) => {
    const user = await User.findOne({ email: payload.email })
    if (!user) {
        throw new AppError(404, "User not found!");
    }

    const isCorrectPassword = await bcrypt.compare(payload.password, user.password);
    if (!isCorrectPassword) {
        throw new AppError(400, "Password is incorrect!")
    }

    const accessToken = jwtHelper.generateToken({ email: user.email, role: user.role }, process.env.JWT_SECRET as Secret, "7d");

    const refreshToken = jwtHelper.generateToken({ email: user.email, role: user.role }, process.env.REFRESH_SECRET as Secret, "90d");

    return {
        user,
        accessToken,
        refreshToken
    }
}


const getUserByEmail = async (email: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new AppError(404, "User not found!");
    }
    return user;
}


export const UserServices = {
    createUser,
    userLogin,
    getUserByEmail
}