const express = require("express");
//for now we have only one route i.e users
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateById,
  handleDeleteById,
  handleCreateNewUser,
} = require("../controllers/user");

//everything is around api/users so let's remove users
// / -> api/users
router.post("/", handleCreateNewUser);
router.get("/", handleGetAllUsers);
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
router.get("/:userId", handleGetUserById);
router.patch("/:userId", handleUpdateById);
router.delete("/:userId", handleDeleteById);

module.exports = router;
