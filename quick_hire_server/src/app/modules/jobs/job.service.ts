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
    companyLogo: payload.companyLogo,
    description: payload.description,
    company: payload.company,
    jobLocation: payload.jobLocation,
    salary: payload.salary,
    jobType: payload.jobType || "FULL_TIME",
    experience: payload.experience,
    skills: payload.skills,
    jobCategory: payload.jobCategory,
    postedBy: payload.postedBy,
    applicationEnd: payload.applicationEnd,
    status: payload.status || "ACTIVE",
  };

  const result = await Job.create(jobData);

  const populatedResult = await Job.findById(result._id)
    .populate("postedBy", "fullName email contactNo");

  return populatedResult;
};

const deleteJob = async (id: string) => {
  const result = await Job.findByIdAndUpdate(
    id,
    { status: "INACTIVE" },
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