const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const { swaggerUi, specs } = require('./swagger'); // ✅ NEW

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // ✅ NEW

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 5050, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
