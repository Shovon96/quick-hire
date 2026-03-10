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
exports.ApplicationsControllers = exports.getApplicationById = void 0;
const catchAsync_1 = require("../../middlewares/catchAsync");
const applications_service_1 = require("./applications.service");
const submitApplication = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const application = yield applications_service_1.applicationService.submitApplication(payload);
    res.status(201).json({
        success: true,
        message: "Applications submited successfully",
        data: application,
    });
}));
const getUserApplications = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield applications_service_1.applicationService.getUserApplications(userId);
    res.status(200).json({
        success: true,
        message: "Applications retrieved successfully",
        data: result,
    });
}));
exports.getApplicationById = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield applications_service_1.applicationService.getApplicationById(id);
    res.status(200).json({
        success: true,
        message: "Application retrieved successfully",
        data: result,
    });
}));
exports.ApplicationsControllers = {
    submitApplication,
    getUserApplications,
    getApplicationById: exports.getApplicationById,
};
