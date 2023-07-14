const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require ('./routes')

const port = 3000;

app.get("/", (userRoutes) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("server running at port 3000");
});

//mongoose db connection

const mongoDB = "mongodb://localhost:27017/crud";

mongoose.connect(mongoDB).then(() => {
  console.log("connected");
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("students", UserSchema);

