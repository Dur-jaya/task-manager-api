const request = require('supertest');
const app = require('../index'); // using app directly
const mongoose = require('mongoose');
const Task = require('../models/taskModel');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('API CRUD', () => {
  let taskId;

  it('POST /api/tasks → should create task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'API Test Task' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('API Test Task');
    taskId = res.body._id;
  });

  it('GET /api/tasks → should fetch all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('PUT /api/tasks/:id → should update task', async () => {
    const res = await request(app)
      .put(`/api/tasks/${taskId}`)
      .send({ completed: true });
    expect(res.statusCode).toBe(200);
    expect(res.body.completed).toBe(true);
  });

  it('DELETE /api/tasks/:id → should delete task', async () => {
    const res = await request(app).delete(`/api/tasks/${taskId}`);
    expect(res.statusCode).toBe(200);
  });
});
