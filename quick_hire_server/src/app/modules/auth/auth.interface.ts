export type IUserRole = "USER" | "GUEST" | "ADMIN";

export interface IUserCreateInput {
    fullName: string;
    email: string;
    password: string;
    role?: IUserRole;
    contactNo?: string;
    address?: string;
}