const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  companyLogo: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  jobLocation: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    enum: ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"],
    required: true
  },
  experience: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },
  jobCategory: {
    type: [String],
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  applicationEnd: {
    type: String
  },
  status: {
    type: String,
    enum: ["ACTIVE", "CLOSED", "DRAFT"],
    default: "ACTIVE"
  }
},
{ timestamps: true, versionKey: false });

export const Job = mongoose.model("Job", jobSchema);
