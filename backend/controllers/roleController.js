const Role = require("../models/Role");

const getRoles = async (req, res) => {
  try {
    const roles = await Role.find().populate("permissions");
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRole = async (req, res) => {
  const { name, permissions } = req.body;

  const newRole = new Role({
    name,
    permissions,
  });

  try {
    await newRole.save();
    res.json({ message: "Role created successfully", role: newRole });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRoles, createRole };
