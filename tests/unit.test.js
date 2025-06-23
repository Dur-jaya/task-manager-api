const Task = require('../models/taskModel');

describe('Task Model', () => {
  it('should create a new task with title', () => {
    const task = new Task({ title: 'Test Task' });
    expect(task.title).toBe('Test Task');
    expect(task.completed).toBe(false); // default
  });
});
