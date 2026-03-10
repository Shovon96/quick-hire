import { Request, Response, NextFunction } from "express";
import { UserServices } from "./auth.service";
import { catchAsync } from "../../middlewares/catchAsync";
import { jwtHelper } from "../../helper/jwtHelper";
import { Secret } from "jsonwebtoken";
import AppError from "../../helper/AppError";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const user = await UserServices.createUser(req.body);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  })

})


const userLogin = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.userLogin(req.body);
  const { accessToken, refreshToken } = result;

  res.cookie("accessToken", accessToken, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    // maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  })
  res.cookie("refreshToken", refreshToken, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    // maxAge: 1000 * 60 * 60 * 24 * 90 // 90 days
  })

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    data: result,
  })
})


const userLogOut = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  })

  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  })
  res.status(200).json({
    success: true,
    message: "User logged out successfully",
    data: null,
  })
})


const getMe = catchAsync(async (req: Request, res: Response) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    throw new AppError(401, "No token provided");
  }

  try {
    const decoded = jwtHelper.verifyToken(token, process.env.JWT_SECRET as Secret);
    
    const user = await UserServices.getUserByEmail(decoded.email);

    if (!user) {
      throw new AppError(404, "User not found");
    }

    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    throw new AppError(401, "Invalid or expired token");
  }
});

export const UserControllers = {
  createUser,
  userLogin,
  userLogOut,
  getMe
}