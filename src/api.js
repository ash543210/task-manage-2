const express = require("express");
const serverless = require("serverless-http");

const mongoose = require("mongoose");
const tasksRoutes = require("../src/routes/task.js");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
// const func = async () => {
//   const result = await fetch(
//     "https://app.netlify.com/teams/api/v1/accounts/ash543210",
//     { method: "GET", mode: "cors" }
//   );
//   const data = await result.json();
//   console.log(data);
// };

// func();

mongoose
  .connect(
    "mongodb+srv://ash54321:taGpWfeSyhuXfFgW@cluster0.si5umyq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

app.use("/.netlify/functions/api", tasksRoutes);

// app.listen(3001);

module.exports = app;
module.exports.handler = serverless(app);
