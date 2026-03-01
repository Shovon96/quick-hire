import { Request, Response, NextFunction } from "express";
import { UserServices } from "./auth.service";
import { catchAsync } from "../../middlewares/catchAsync";

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
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  })
  res.cookie("refreshToken", refreshToken, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 90 // 90 days
  })

  res.status(201).json({
    success: true,
    message: "User logged in successfully",
    data: result,
  })
})

export const UserControllers = {
  createUser,
  userLogin
}