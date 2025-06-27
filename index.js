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
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description: "API for managing tasks",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./routes/*.js"], // Adjust path if needed
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Task Manager API is running!');
});
