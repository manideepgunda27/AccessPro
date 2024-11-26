const Permission = require("../models/Permission");

const getPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPermission = async (req, res) => {
  const { name, module } = req.body;

  const newPermission = new Permission({
    name,
    module,
  });

  try {
    await newPermission.save();
    res.json({ message: "Permission created successfully", permission: newPermission });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPermissions, createPermission };
