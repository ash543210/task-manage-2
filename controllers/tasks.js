const Task = require("../models/task");

module.exports.getTasks = async (req, res) => {
  //   await Task.deleteMany({});
  const tasks = await Task.find({});
  res.send({ tasks: tasks });
};

module.exports.postTasks = async (req, res) => {
  const newTask = await Task.insertMany(req.body);
  console.log(newTask[0], "newTask submit");
  res.send({ task: newTask[0] });
};

module.exports.updateTasks = async (req, res) => {
  const updateTask = await Task.updateOne(
    { _id: req.body._id },
    { ...req.body }
  );
};

module.exports.deleteTasks = async (req, res) => {
  const newTask = await Task.deleteOne({ _id: req.body._id });
};
