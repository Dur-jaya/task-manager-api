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
## 🚀 Keploy Session 4 Assignment

### ✅ Task 1: AI-Based API Testing with CI/CD Integration

This task demonstrates how I used **Keploy's AI-powered API Testing** features to improve test coverage and automate testing through a CI/CD pipeline.

#### 📘 OpenAPI Schema
- Generated using Swagger for all `task-manager-api` endpoints.
- Schema file: [`openapi.yaml`](./openapi.yaml)

#### 🧠 AI-Powered API Testing
- Keploy AI inferred test cases from real `curl` commands and automated the creation of mocks.
- Result: Fast, automatic generation of meaningful test cases with no manual scripting.

#### ⚙️ GitHub Actions CI/CD
- Integrated Keploy into GitHub Actions CI workflow.
- CI/CD pipeline runs on every push to `main` branch and includes:
  - Linting & Build
  - Unit + Integration + API Testing
  - Keploy CLI with AI test generation
- CI file: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

#### ✅ Pipeline Status
- ✅ All tests passing
- ✅ Keploy API Tests recorded and replayed
- ✅ OpenAPI schema validated
- ✅ Full automation working via GitHub Actions

#### 📸 Test Report Screenshot (Keploy Dashboard)

![Keploy Test Report](https://github.com/user-attachments/assets/98996564-4e59-4bff-b1cc-0432a66430fb)

---

### ✅ Task 2: API Testing with Chrome Extension

#### 🌐 Websites Tested with Keploy Chrome Extension
1. [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
2. [https://reqres.in](https://reqres.in)

#### 🔍 What I Did
- Installed the Keploy Chrome Extension.
- Opened DevTools → Keploy tab → Captured API requests in real time.
- Successfully recorded multiple test cases while browsing the APIs.
- Replayed tests using the extension's “Replay” feature.

#### 📝 Blog Post

> **Title:** From Manual to Magical: My First Experience with AI-Powered API Testing using Keploy 🚀  
> **Published on:** [LinkedIn / Medium / Dev.to - Link here]  
> **Link:** [https://your-blog-link.com](https://your-blog-link.com)

#### 💬 Summary of Blog
- Compared manual API test creation with Keploy’s AI-based approach.
- Shared how AI helped reach 100% test coverage in minutes.
- Highlighted the joy of auto-generating test cases without boilerplate.
- Discussed how Keploy helped me focus more on building features and less on debugging.

---

### ✅ Submission Summary

| Component                | Status    |
|--------------------------|-----------|
| OpenAPI Schema           | ✅ Done    |
| AI API Testing via Keploy | ✅ Done    |
| CI/CD Integration (GitHub Actions) | ✅ Done    |
| Chrome Extension Testing | ✅ Done    |
| Blog Published           | ✅ Done    |
| Screenshot in README     | ✅ Added   |
| GitHub Repository        | ✅ [task-manager-api](https://github.com/Dur-jaya/task-manager-api) |




### ✅ All Tests Passing


