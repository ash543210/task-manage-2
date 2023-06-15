const express = require("express");
const serverless = require("serverless-http");

const mongoose = require("mongoose");
const tasksRoutes = require("../src/routes/task.js");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://ash54321:taGpWfeSyhuXfFgW@cluster0.si5umyq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

app.use("/.netlify/functions/api", tasksRoutes);

// app.listen(3001);

module.exports = app;
module.exports.handler = serverless(app);
