import { z } from "zod";

export const createUserValidationSchema = z.object({
    email: z.string().min(1, "Email is required"),
    password: z.string().min(6, "Password must be 4+ chars"),
    fullName: z.string().min(2, "Name is required"),
    role: z.enum(["USER", "GUEST", "ADMIN"]).default("USER"),
    address: z.string().optional(),
    contactNo: z.string().optional(),
});

export const UserValidation = {
    createUserValidationSchema
}