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
exports.UserControllers = void 0;
const auth_service_1 = require("./auth.service");
const catchAsync_1 = require("../../middlewares/catchAsync");
const createUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_service_1.UserServices.createUser(req.body);
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
    });
}));
const userLogin = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.UserServices.userLogin(req.body);
    const { accessToken, refreshToken } = result;
    res.cookie("accessToken", accessToken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    });
    res.cookie("refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 90 // 90 days
    });
    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: result,
    });
}));
const userLogOut = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });
    res.status(200).json({
        success: true,
        message: "User logged out successfully",
        data: null,
    });
}));
exports.UserControllers = {
    createUser,
    userLogin,
    userLogOut
};
