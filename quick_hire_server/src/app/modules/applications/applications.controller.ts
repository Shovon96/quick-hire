import { Request, Response, NextFunction } from "express";
import { IApplicationCreateInput } from "./applications.interface";
import { catchAsync } from "../../middlewares/catchAsync";
import { applicationService } from "./applications.service";


const submitApplication = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const payload: IApplicationCreateInput = req.body;
  const application = await applicationService.submitApplication(payload);

  res.status(201).json({
    success: true,
    message: "Applications submited successfully",
    data: application,
  })

})

const getUserApplications = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const { userId } = req.params;
  const result = await applicationService.getUserApplications(userId as string);

  res.status(200).json({
    success: true,
    message: "Applications retrieved successfully",
    data: result,
  });
});

export const getApplicationById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;
  const result = await applicationService.getApplicationById(id as string);

  res.status(200).json({
    success: true,
    message: "Application retrieved successfully",
    data: result,
  })

})

export const ApplicationsControllers = {
  submitApplication,
  getUserApplications,
  getApplicationById,
};
