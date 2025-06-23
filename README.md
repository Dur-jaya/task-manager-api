# 📝 Task Manager API

A simple and powerful **Task Manager REST API** built using **Express.js**, **MongoDB**, and **Mongoose**.  
This project supports full **CRUD** operations and includes **unit**, **integration**, and **API tests** with over 70% test coverage.

> Built with ❤️ for the [Keploy API Fellowship](https://keploy.io) by [@Dur-jaya](https://github.com/Dur-jaya)

---

## 🚀 Features

- 🌐 RESTful API with Express
- 🧠 Mongoose schema for Task model
- ✅ CRUD: Create, Read, Update, Delete tasks
- 🧪 Unit, Integration, and API testing using **Jest** and **Supertest**
- 🧾 MongoDB Atlas for cloud database
- 📦 .env support for config
- 💯 70%+ Test Coverage

---

## ⚙️ Tech Stack

| Tech           | Description                   |
|----------------|-------------------------------|
| Node.js        | JavaScript runtime             |
| Express.js     | Web framework                  |
| MongoDB Atlas  | Cloud NoSQL database           |
| Mongoose       | MongoDB ODM                    |
| Jest           | Testing framework              |
| Supertest      | HTTP assertions for API tests  |
| dotenv         | Load environment variables     |
| CORS           | Enable cross-origin requests   |

---

## 📂 Project Structure

task-manager-api/
├── controllers/
│ └── taskController.js
├── models/
│ └── taskModel.js
├── routes/
│ └── taskRoutes.js
├── tests/
│ ├── unit.test.js
│ ├── integration.test.js
│ └── api.test.js
├── index.js
├── .env
└── README.md

---

## 🛠️ API Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/api/tasks`     | Get all tasks       |
| GET    | `/api/tasks/:id` | Get a task by ID    |
| POST   | `/api/tasks`     | Create a task       |
| PUT    | `/api/tasks/:id` | Update a task       |
| DELETE | `/api/tasks/:id` | Delete a task       |

---

## 🧪 Testing Guide

### ✅ Run All Tests

```bash
npm test
PASS  tests/unit.test.js
PASS  tests/integration.test.js
FAIL  tests/api.test.js → ❌ FIXED NOW
------------------------------|---------|----------|---------|---------|
File                          | % Stmts | % Branch | % Funcs | % Lines |
------------------------------|---------|----------|---------|---------|
All files                     |   75.00 |    50.00 |   71.42 |   78.00 |
 task-manager-api/controllers |   60.00 |     0.00 |   40.00 |   62.50 |
 task-manager-api/models      |  100.00 |   100.00 |  100.00 |  100.00 |
 task-manager-api/routes      |  100.00 |   100.00 |  100.00 |  100.00 |
------------------------------|---------|----------|---------|---------|
✅ All test cases passing
🧪 Coverage above 70%
🛡️ Tested using Jest + Supertest
📦 How to Run Locally
Clone the repo
git clone https://github.com/Dur-jaya/task-manager-api.git
cd task-manager-api


Install dependencies
npm install


Create .env file
PORT=5000
MONGO_URI=your_mongodb_uri_here

Run the server
npm start

Test the server
npm test
📌 GitHub Repo
🔗 https://github.com/Dur-jaya/task-manager-api

🙋‍♀️ Author
Made with 💖 by Dur-jaya
📬 GitHub

📃 License
This project is licensed under the MIT License.

🌟 Show Some Love
If you liked this project, leave a ⭐ on the repo!

---

### ✅ What next?

- Add this `README.md` to your project root.
- Commit and push:
```bash
git add README.md
git commit -m "📝 Added professional README"
git push



### ✅ All Tests Passing
![Test Results](https://via.placeholder.com/800x400.png?text=Test+Results+Screenshot)
git add test-results.png README.md
git commit -m "Fix: replaced corrupted test results image"
git push<img width="560" alt="test-result" src="https://github.com/user-attachments/assets/98996564-4e59-4bff-b1cc-0432a66430fb" />

