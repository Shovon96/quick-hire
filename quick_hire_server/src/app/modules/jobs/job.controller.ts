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

// export const createJob = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const jobData: IJobCreateInput = {
//       title: req.body.title,
//       description: req.body.description,
//       company: req.body.company,
//       location: req.body.location,
//       salary: req.body.salary,
//       jobType: req.body.jobType,
//       experience: req.body.experience,
//       skills: req.body.skills,
//       postedBy: req.body.postedBy,
//       status: req.body.status,
//     };

//     const result = await createJobService(jobData);

//     res.status(201).json({
//       success: true,
//       message: "Job created successfully",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const JobsControllers = {
  getAllJobs,
  getJobById,
  createJob,
};
