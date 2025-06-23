require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

module.exports = app; // export only the app
