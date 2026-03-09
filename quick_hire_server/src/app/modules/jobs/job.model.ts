const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    enum: ["ONSITE", "REMOTE", "HYBRID"],
    required: true
  },
  jobLocation: {
    type: String,
  },
  experience: {
    type: String
  },
  salary: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    enum: ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"],
    required: true
  },
  jobCategory: {
    type: [String],
    required: true
  },
  vacancy: {
    type: String
  },
  applicationDeadline: {
    type: String
  },
  status: {
    type: String,
    enum: ["ACTIVE", "CLOSED", "DRAFT"],
    default: "ACTIVE"
  },
  company: {
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String
    },
    location: {
      type: String
    },
    website: {
      type: String
    }
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
},
  { timestamps: true, versionKey: false });

export const Job = mongoose.model("Job", jobSchema);
