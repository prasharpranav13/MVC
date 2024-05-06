const express = require("express");
const app = express();
const PORT = 8000;
// const mongoose = require("mongoose");
const { connectMongodb } = require("./connection");
const User = require("./models/user");
const userRouter = require("./routes/user");

//connect
connectMongodb("mongodb://localhost:27017/project2");

app.use(express.urlencoded({ extended: false }));

//Routes
//users pe koi req aaye to use userRouter
//-> /users/:id or /users
app.use("/users", userRouter);
app.listen(PORT, () => {
  console.log(`server started`);
});
