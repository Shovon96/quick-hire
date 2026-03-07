import { Request, Response, NextFunction } from "express";
import { IJobCreateInput } from "./job.interface";
import { catchAsync } from "../../middlewares/catchAsync";
import { JobsServices } from "./job.service";


const getAllJobs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const result = await JobsServices.getAllJobs();

  res.status(200).json({
    success: true,
    message: "Jobs retrieved successfully",
    data: result,
  })

})

const getJobById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;
  const result = await JobsServices.getJobById(id as string);

  res.status(200).json({
    success: true,
    message: "Job retrieved successfully",
    data: result,
  })

})

const createJob = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const payload: IJobCreateInput = req.body;
  const createJob = await JobsServices.createJob(payload);

  res.status(201).json({
    success: true,
    message: "Job created successfully",
    data: createJob,
  })

})

const deleteJob = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;
  const result = await JobsServices.deleteJob(id as string);

  res.status(200).json({
    success: true,
    message: "Job deleted successfully",
    data: result,
  })

})

export const JobsControllers = {
  getAllJobs,
  getJobById,
  createJob,
  deleteJob
};
