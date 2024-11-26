const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const router = express.Router();

// Fetch all users
router.get("/", async (req, res) => {
  const users = await User.find().populate("roles");
  res.json(users);
});

// Add a new user
router.post("/", async (req, res) => {
  const { name, email, password, roles } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword, roles });
  await user.save();
  res.json({ message: "User created", user });
});

module.exports = router;
