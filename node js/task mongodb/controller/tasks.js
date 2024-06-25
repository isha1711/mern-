const Task = require("../model/Task");
const mongoose = require("mongoose");

const getalltask = async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({ task });
};

const createtask = async (req, res) => {
//   console.log(req.body);
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const gettask = async (req, res) => {

  const { id: taskid } = req.params;
  console.log(taskid )
  const task = await Task.findOne({ _id: taskid });
  console.log(task)
  if (!task) {
    return res.status(404);
  }
  res.status(200).json({ task });
};

const deletetask = async (req, res) => {
  const { id: taskid } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskid });
  if (!task) {
    return res.status(404);
  }
  res.status(200).json({ task });
};

const updatetask = async (req, res) => {
  const { id: taskid } = req.params;
  const task = Task.findOneAndUpdate({ id: taskid }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404);
  }
  res.status(200).json({ task });
};

module.exports = { getalltask, createtask, gettask, deletetask, updatetask };
