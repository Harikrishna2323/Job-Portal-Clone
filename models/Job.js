const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    salaryFrom: {
      type: Number,
      required: true,
    },
    salaryTo: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    smDesc: {
      type: String,
      required: true,
    },
    flDesc: {
      type: String,
      required: true,
    },
    minQualification: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    companyDesc: {
      type: String,
      required: true,
    },
    appliedCandidates: {
      type: [],
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Jobs", jobSchema);
