"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["USER", "GUEST", "ADMIN"],
        default: "USER"
    },
    contactNo: {
        type: String,
    },
    address: {
        type: String,
    },
}, { timestamps: true, versionKey: false });
exports.User = mongoose.model("User", userSchema);
