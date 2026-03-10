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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const auth_model_1 = require("./auth.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AppError_1 = __importDefault(require("../../helper/AppError"));
const jwtHelper_1 = require("../../helper/jwtHelper");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password } = payload, rest = __rest(payload, ["fullName", "email", "password"]);
    const isUserExist = yield auth_model_1.User.findOne({ email });
    if (isUserExist) {
        throw new AppError_1.default(400, "User Already Exist with this email");
    }
    const hashPassword = yield bcrypt_1.default.hash(password, 10);
    const user = yield auth_model_1.User.create(Object.assign({ fullName,
        email, password: hashPassword }, rest));
    return user;
});
const userLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_model_1.User.findOne({ email: payload.email });
    if (!user) {
        throw new AppError_1.default(404, "User not found!");
    }
    const isCorrectPassword = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!isCorrectPassword) {
        throw new AppError_1.default(400, "Password is incorrect!");
    }
    const accessToken = jwtHelper_1.jwtHelper.generateToken({ email: user.email, role: user.role }, process.env.JWT_SECRET, "7d");
    const refreshToken = jwtHelper_1.jwtHelper.generateToken({ email: user.email, role: user.role }, process.env.REFRESH_SECRET, "90d");
    return {
        user,
        accessToken,
        refreshToken
    };
});
exports.UserServices = {
    createUser,
    userLogin
};
