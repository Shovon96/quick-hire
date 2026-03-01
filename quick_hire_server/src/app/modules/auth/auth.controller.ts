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


export const UserControllers = {
  createUser,
}