"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationValidation = exports.createApplicationValidationSchema = void 0;
const zod_1 = require("zod");
exports.createApplicationValidationSchema = zod_1.z.object({
    jobId: zod_1.z.string().min(1, "Job ID is required"),
    name: zod_1.z.string().min(2, "Name is required and must be at least 2 characters"),
    email: zod_1.z.string().email("Invalid email address"),
    contactNo: zod_1.z.string().min(10, "Contact number is required and must be at least 10 characters"),
    resume: zod_1.z.string().min(10, "Resume is required and must be at least 10 characters"),
    coverLetter: zod_1.z.string().min(20, "Cover letter is required and must be at least 20 characters"),
    status: zod_1.z.enum(["PENDING", "REVIEWED", "SHORTLISTED", "REJECTED"]).default("PENDING"),
});
exports.ApplicationValidation = {
    createApplicationValidationSchema: exports.createApplicationValidationSchema
};
