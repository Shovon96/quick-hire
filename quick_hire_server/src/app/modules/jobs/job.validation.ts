import { z } from "zod";

export const createJobValidationSchema = z.object({
  title: z.string().min(3, "Job title is required and must be at least 3 characters"),
  description: z.string().min(10, "Description is required and must be at least 10 characters"),
  jobType: z.enum(["ONSITE", "REMOTE", "HYBRID"], {
    message: "Job type must be ONSITE, REMOTE, or HYBRID"
  }),
  jobLocation: z.string().optional(),
  experience: z.string().optional(),
  salary: z.string().min(1, "Salary is required"),
  employmentType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"], {
    message: "Employment type must be FULL_TIME, PART_TIME, CONTRACT, or INTERNSHIP"
  }),
  jobCategory: z.array(z.string()).min(1, "At least one category is required"),
  vacancy: z.string().optional(),
  applicationDeadline: z.string().optional(),
  status: z.enum(["ACTIVE", "CLOSED", "DRAFT"]).default("ACTIVE").optional(),
  postedBy: z.string().min(1, "Posted by (User ID) is required"),
  company: z.object({
    name: z.string().min(2, "Company name is required"),
    logo: z.string().optional(),
    location: z.string().optional(),
    website: z.string().optional()
  })
});

export const JobValidation = {
  createJobValidationSchema
};
