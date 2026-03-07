import { z } from "zod";

export const createJobValidationSchema = z.object({
  title: z.string().min(3, "Job title is required and must be at least 3 characters"),
  companyLogo: z.string().optional(),
  description: z.string().min(10, "Description is required and must be at least 10 characters"),
  company: z.string().min(2, "Company name is required"),
  jobLocation: z.string().min(2, "Location is required"),
  salary: z.string().min(1, "Salary is required"),
  jobType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"]),
  experience: z.string().optional(),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  jobCategory: z.array(z.string()).min(1, "At least one category is required"),
  postedBy: z.string().min(1, "Posted by user ID is required"),
  applicationEnd: z.string().optional(),
  status: z.enum(["ACTIVE", "CLOSED", "DRAFT"]).default("ACTIVE"),
});

export const JobValidation = {
  createJobValidationSchema
};
