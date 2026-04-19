const taskService = require("../services/taskService");

exports.createTask = (req, res) => {
    if (!req.body || !req.body.title) {
        return res.status(400).json({ error: "Task title is required" });
    }

    const task = taskService.createTask(req.body);
    res.status(201).json(task);
};

exports.getTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  if (!req.body || (!req.body.title && req.body.completed === undefined)) {
    return res.status(400).json({ error: "At least one field (title or completed) is required" });
  }

  const updatedTask = taskService.updateTask(id, req.body);
  if (!updatedTask) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(updatedTask);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const taskExists = taskService.getAllTasks().some(t => t.id == id);
  if (!taskExists) {
    return res.status(404).json({ error: "Task not found" });
  }

  taskService.deleteTask(id);
  res.status(204).send();
};

