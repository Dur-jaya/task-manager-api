// controllers/taskController.js

exports.getTasks = (req, res) => {
  res.status(200).json({ message: 'Fetched all tasks' });
};

exports.createTask = (req, res) => {
  res.status(201).json({ message: 'Created a new task' });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Updated task with id ${id}` });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Deleted task with id ${id}` });
};
