const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("All Itemss " + new Date());
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(`task`, task);
    res.status(201).json({ task });
  } catch (err) {
      res.status(400).json(err)
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task ");
};

const deleteTask = (req, res) => {
  res.send("delete task ");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
