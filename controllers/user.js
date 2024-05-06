//functions that we'll attach with our routes

const User = require("../models/user");
const handleGetAllUsers = async (req, res) => {
  const user = await User.find({});
  return res.json(user);
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) res.status(400).json({ msg: "not found" });
  return res.json(user);
};

const handleUpdateById = async (req, res) => {
  await User.findByIdAndUpdate(req.params.userId, { email: "abcd@gmail.com" });
  return res.json({ staus: "success" });
};

const handleDeleteById = async (req, res) => {
  await User.findByIdAndDelete(req.params.userId);
  return res.json({ staus: "success" });
};

const handleCreateNewUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  )
    return res.status(400).json({ msg: "fill all the fields" });
  await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  return res.status(201).json({ msg: "success" });
};
module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateById,
  handleDeleteById,
  handleCreateNewUser,
};
