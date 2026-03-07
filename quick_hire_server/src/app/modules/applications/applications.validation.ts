import { z } from "zod";

export const createApplicationValidationSchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  name: z.string().min(2, "Name is required and must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(10, "Contact number is required and must be at least 10 characters"),
  resume: z.string().min(10, "Resume is required and must be at least 10 characters"),
  coverLetter: z.string().min(20, "Cover letter is required and must be at least 20 characters"),
  status: z.enum(["PENDING", "REVIEWED", "SHORTLISTED", "REJECTED"]).default("PENDING"),
});

export const ApplicationValidation = {
  createApplicationValidationSchema
};
