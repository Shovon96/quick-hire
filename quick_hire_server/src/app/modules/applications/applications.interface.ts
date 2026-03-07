export type IApplicationStatus = "PENDING" | "REVIEWED" | "SHORTLISTED" | "REJECTED";

export interface IApplicationCreateInput {
  jobId: string;
  name: string;
  email: string;
  contactNo: string;
  resume: string;
  coverLetter: string;
  status?: IApplicationStatus;
}

