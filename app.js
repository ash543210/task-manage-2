const express = require("express");

const mongoose = require("mongoose");
const tasksRoutes = require("./routes/task.js");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const port = process.env.PORT || 3001;

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ash54321:NldFgtHh8AYqti5D@cluster0.si5umyq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

app.use("", tasksRoutes);

app.listen(port, () => {
  console.log("listening");
});
