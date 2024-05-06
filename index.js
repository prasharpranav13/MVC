const express = require("express");
const app = express();
const PORT = 8000;
// const mongoose = require("mongoose");
const { connectMongodb } = require("./connection");
const User = require("./models/user");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares/index");

//connection
connectMongodb("mongodb://localhost:27017/project2");

//middlewares

app.use(logReqRes("log.txt"));
app.use(express.urlencoded({ extended: false }));

//Routes
//users pe koi req aaye to use userRouter
//-> /api/users/:id or /api/users
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server started`);
});
