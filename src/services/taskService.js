let tasks = [];
let idCounter = 1;

exports.createTask = (data) => {
  const newTask = {
    id: idCounter++,
    title: data.title,
    completed: false
  };
  tasks.push(newTask);
  return newTask;
};

exports.getAllTasks = () => tasks;

exports.updateTask = (id, data) => {
  const task = tasks.find(t => t.id == id);
  if (!task) return null;

  task.title = data.title ?? task.title;
  task.completed = data.completed ?? task.completed;

  return task;
};

exports.deleteTask = (id) => {
  tasks = tasks.filter(t => t.id != id);
};

