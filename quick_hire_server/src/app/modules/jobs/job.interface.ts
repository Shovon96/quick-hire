export type IEmploymentType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
export type IJobType = "ONSITE" | "REMOTE" | "HYBRID";
export type IJobStatus = "ACTIVE" | "CLOSED" | "DRAFT";

export interface IJobCreateInput {
  title: string;
  description: string;
  jobType: IJobType;
  jobLocation?: string;
  experience?: string;
  salary: string;
  employmentType: IEmploymentType;
  jobCategory: string[];
  vacancy?: string;
  applicationDeadline?: string;
  status?: IJobStatus;
  postedBy: string; // User ID
  company: {
    name: string;
    logo?: string;
    location?: string;
    website?: string;
  }
}