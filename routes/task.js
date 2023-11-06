const express = require("express");
const router = express.Router();
const tasks = require("../controllers/tasks");
const { isValidData } = require("../middleware");
router
  .route("/")
  .get(tasks.getTasks)
  .post(isValidData, tasks.postTasks)
  .put(isValidData, tasks.updateTasks)
  .delete(tasks.deleteTasks);

module.exports = router;
