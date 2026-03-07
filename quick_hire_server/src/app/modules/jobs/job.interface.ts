export type IJobType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
export type IJobStatus = "ACTIVE" | "CLOSED" | "DRAFT";

export interface IJobCreateInput {
  title: string;
  companyLogo?: string;
  description: string;
  company: string;
  jobLocation: string;
  salary: string;
  jobType: IJobType;
  experience?: string;
  skills: string[];
  jobCategory: string[];
  postedBy?: string;
  applicationEnd?: string;
  status?: IJobStatus;
}
