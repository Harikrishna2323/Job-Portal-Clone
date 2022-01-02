const router = require("express").Router();
const Jobs = require("../models/Job");
const User = require("../models/User");
const moment = require("moment");

//GET ALL JOBS
router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.send(jobs);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

//ADD A JOB
router.post("/postjob", async (req, res) => {
  const {
    appliedCandidates,
    title,
    department,
    salaryFrom,
    salaryTo,
    experience,
    skillsRequired,
    minQualification,
    smDesc,
    flDesc,
    company,
    email,
    phone,
    postedBy,
    companyDesc,
  } = req.body;
  try {
    const newJob = new Jobs({
      appliedCandidates,
      title,
      department,
      salaryFrom,
      salaryTo,
      experience,
      skillsRequired,
      minQualification,
      smDesc,
      flDesc,
      company,
      email,
      phone,
      postedBy,
      companyDesc,
    });

    const job = await newJob.save();
    res.send(job);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error });
  }
});

//EDIT JOB
router.post("/editjob", async (req, res) => {
  try {
    const updatedjob = await Jobs.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.send("Job Updated Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

//APPLY FOR JOB
router.post("/applyjob", async (req, res) => {
  const { user, job } = req.body;

  const jobDetails = await Jobs.findOne({ _id: job._id });

  const appliedCandidate = {
    userid: user._id,
    appliedDate: moment().format("MM DD yyyy"),
  };

  jobDetails.appliedCandidates.push(appliedCandidate);

  await jobDetails.save();

  const userDetails = await User.findOne({ _id: user._id });

  const appliedJob = {
    jobid: job._id,
    appliedDate: moment().format("MMM DD yyyy"),
  };

  userDetails.appliedJobs.push(appliedJob);

  await userDetails.save();

  res.send("Job Applied Successfully");
});
module.exports = router;
