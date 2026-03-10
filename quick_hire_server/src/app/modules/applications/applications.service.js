"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationService = void 0;
const applications_model_1 = require("./applications.model");
const submitApplication = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if user already applied
    const existingApplication = yield applications_model_1.Application.findOne({
        jobId: payload.jobId,
        email: payload.email,
    });
    if (existingApplication) {
        throw new Error("You have already applied for this job");
    }
    // // find user by email
    // const user = await User.findOne({ email: payload.email });
    // // admin not allowed
    // if (user.role === "ADMIN") {
    //   throw new Error("Admin is not allowed to apply for jobs");
    // }
    const applicationData = {
        jobId: payload.jobId,
        name: payload.name,
        email: payload.email,
        contactNo: payload.contactNo,
        resume: payload.resume,
        coverLetter: payload.coverLetter,
        status: payload.status || "PENDING",
    };
    const result = yield applications_model_1.Application.create(applicationData);
    const populatedResult = yield applications_model_1.Application.findById(result._id)
        .populate("jobId", "title company location");
    return populatedResult;
});
const getUserApplications = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield applications_model_1.Application.find({ userId })
        .populate("jobId", "title company location salary")
        .populate("userId", "name email")
        .sort({ createdAt: -1 });
    return result;
});
const getApplicationById = (applicationId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield applications_model_1.Application.findById(applicationId)
        .populate("jobId", "title company location salary")
        .populate("userId", "fullName email contactNo");
    if (!result) {
        throw new Error("Application not found");
    }
    return result;
});
exports.applicationService = {
    submitApplication,
    getUserApplications,
    getApplicationById
};
