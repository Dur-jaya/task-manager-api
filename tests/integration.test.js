require('dotenv').config(); // <-- LOAD ENV VARIABLES

const mongoose = require('mongoose');
const Task = require('../models/taskModel');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('MongoDB CRUD', () => {
  let taskId;

  it('should create a task', async () => {
    const task = await Task.create({ title: 'Integration Test Task' });
    taskId = task._id;
    expect(task.title).toBe('Integration Test Task');
  });

  it('should read a task', async () => {
    const task = await Task.findById(taskId);
    expect(task).toBeTruthy();
  });

  it('should update a task', async () => {
    const updated = await Task.findByIdAndUpdate(taskId, { completed: true }, { new: true });
    expect(updated.completed).toBe(true);
  });

  it('should delete a task', async () => {
    const deleted = await Task.findByIdAndDelete(taskId);
    expect(deleted._id.toString()).toBe(taskId.toString());
  });
});
