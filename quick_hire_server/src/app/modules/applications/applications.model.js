"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const mongoose = require("mongoose");
const applicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    coverLetter: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "REVIEWED", "SHORTLISTED", "REJECTED"],
        default: "PENDING"
    }
}, { timestamps: true, versionKey: false });
exports.Application = mongoose.model("Application", applicationSchema);
