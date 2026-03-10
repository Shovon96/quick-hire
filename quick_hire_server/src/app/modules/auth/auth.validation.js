"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    email: zod_1.z.string().min(1, "Email is required"),
    password: zod_1.z.string().min(6, "Password must be 4+ chars"),
    fullName: zod_1.z.string().min(2, "Name is required"),
    role: zod_1.z.enum(["USER", "GUEST", "ADMIN"]).default("USER"),
    address: zod_1.z.string().optional(),
    contactNo: zod_1.z.string().optional(),
});
const loginValidationSchema = zod_1.z.object({
    email: zod_1.z.string().min(1, "Email is required"),
    password: zod_1.z.string().min(6, "Password must be 4+ chars"),
});
exports.UserValidation = {
    createUserValidationSchema,
    loginValidationSchema
};
