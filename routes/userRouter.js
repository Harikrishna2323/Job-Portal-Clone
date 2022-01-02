const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const newuser = new User(req.body);
    const user = await newuser.save();
    res.send("User Created Successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});
module.exports = router;

//UPDATE
router.post("/update", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);

    const user = await User.findOne({ _id: req.body._id });

    res.send(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

//GET ALL USERS
router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
