const express = require("express");
//for now we have only one route i.e users
const router = express.Router();

//everything is around api/users so let's remove users
// / -> api/users
router.post("/", async (req, res) => {
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
});
router.get("/", async (req, res) => {
  const user = await User.find({});
  return res.json(user);
});
// router.get("/users", async (req, res) => {
//   const allUsers = await User.find({});
//   const html = `<ul>
//   ${allUsers
//     .map((user) => {
//       return `<li> ${user.firstName} ${user.lastName} ${user.email} </li>`;
//     })
//     .join("")} </ul>`;
//   res.send(html);
// });
router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) res.status(400).json({ msg: "not found" });
  return res.json(user);
});
router.patch("/:userId", async (req, res) => {
  await User.findByIdAndUpdate(req.params.userId, { email: "abcd@gmail.com" });
  return res.json({ staus: "success" });
});
router.delete("/:userId", async (req, res) => {
  await User.findByIdAndDelete(req.params.userId);
  return res.json({ staus: "success" });
});

module.exports = router;
