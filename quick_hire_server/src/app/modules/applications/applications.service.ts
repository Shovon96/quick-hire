import { User } from "../auth/auth.model";
import { IApplicationCreateInput } from "./applications.interface";
import { Application } from "./applications.model";

const submitApplication = async (
  payload: IApplicationCreateInput
): Promise<IApplicationCreateInput> => {

  // Check if user already applied
  const existingApplication = await Application.findOne({
    jobId: payload.jobId,
    email: payload.email,
  });

  if (existingApplication) {
    throw new Error("You have already applied for this job");
  }

  // // find user by email
  // const user = await User.findOne({ email: payload.email });

  // // admin not allowed
  // if (user.role === "ADMIN") {
  //   throw new Error("Admin is not allowed to apply for jobs");
  // }

  const applicationData = {
    jobId: payload.jobId,
    name: payload.name,
    email: payload.email,
    contactNo: payload.contactNo,
    resume: payload.resume,
    coverLetter: payload.coverLetter,
    status: payload.status || "PENDING",
  };

  const result = await Application.create(applicationData);

  const populatedResult = await Application.findById(result._id)
    .populate("jobId", "title company location");

  return populatedResult;
};

const getUserApplications = async (userId: string) => {
  const result = await Application.find({ userId })
    .populate("jobId", "title company location salary")
    .populate("userId", "name email")
    .sort({ createdAt: -1 });

  return result;
};

const getApplicationById = async (
  applicationId: string
): Promise<IApplicationCreateInput | null> => {
  const result = await Application.findById(applicationId)
    .populate("jobId", "title company location salary")
    .populate("userId", "fullName email contactNo");

  if (!result) {
    throw new Error("Application not found");
  }

  return result;
};


export const applicationService = {
  submitApplication,
  getUserApplications,
  getApplicationById
};