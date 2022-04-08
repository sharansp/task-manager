const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).json({ err });
  }
  //   res.send("All Itemss " + new Date());
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(`task`, task);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID }); //.exec();
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
  //   res.json({ id: req.params.id });
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID }).exec();
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(404).json({ err });
  }
  //   res.send("delete task ");
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    }); //.exec();
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task, body: req.body });
  } catch (err) {
    res.status(404).json({ err });
  }
  // res.send("update task ");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
