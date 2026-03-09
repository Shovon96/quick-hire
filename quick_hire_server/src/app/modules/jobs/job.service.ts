import { User } from "../auth/auth.model";
import { IJobCreateInput } from "./job.interface";
import { Job } from "./job.model";

const getAllJobs = async () => {
  const result = await Job.find({ status: "ACTIVE" })
    .populate("postedBy", "name email company")
    .sort({ createdAt: -1 });
  return result;
};

const getJobById = async (id: string): Promise<IJobCreateInput | null> => {
  const result = await Job.findById(id)
    .populate("postedBy", "name email company");

  if (!result) {
    throw new Error("Job not found");
  }

  return result;
};

const createJob = async (payload: IJobCreateInput): Promise<IJobCreateInput> => {

  // User validation is Admin
  const isAdmin = await User.findById(payload.postedBy);
  if (!isAdmin || isAdmin.role !== "ADMIN") {
    throw new Error("Only admin users can create jobs");
  }

  const jobData = {
    title: payload.title,
    description: payload.description,
    jobType: payload.jobType,
    jobLocation: payload.jobLocation,
    experience: payload.experience,
    salary: payload.salary,
    employmentType: payload.employmentType,
    jobCategory: payload.jobCategory,
    vacancy: payload.vacancy,
    applicationDeadline: payload.applicationDeadline,
    status: payload.status || "ACTIVE",
    company: {
      name: payload.company.name,
      logo: payload.company.logo,
      location: payload.company.location,
      website: payload.company.website
    },
    postedBy: payload.postedBy
  };

  const result = await Job.create(jobData);

  const populatedResult = await Job.findById(result._id)
    .populate("postedBy", "fullName email contactNo");

  return populatedResult;
};

const deleteJob = async (id: string) => {
  const result = await Job.findByIdAndUpdate(
    id,
    { status: "CLOSED" },
    { new: true }
  );
  return result;
};

export const JobsServices = {
  getAllJobs,
  getJobById,
  createJob,
  deleteJob
};