# 📝 Advanced ToDo List App (Dockerized Full Stack)

![CI](https://github.com/Priyansh-Pandey/3-tier-node-todo-app/actions/workflows/docker-publish.yml/badge.svg)

A feature-rich ToDo application with reminders, task status management, and MongoDB persistence — built using Node.js, Express, and Docker with multi-stage builds.

---

## 📦 Features

- ✅ Add, view, and delete tasks
- 🟡 Mark tasks as **Pending** or **Done**
- ⏰ Support for **reminders** via `dueDate`
- 📂 Fully containerized using **Docker & Docker Compose**
- 🗄️ Backend: Node.js + Express + MongoDB
- 🌐 Frontend: HTML + JS + Nginx
- 🔒 Secure by default: uses `.env` for secrets

---

## 🛡️ DevSecOps Highlights

- 🔐 **Trivy image scanning** integrated via GitHub Actions
- 🧪 CI pipeline **fails on HIGH/CRITICAL CVEs**
- 📤 **Auto-push to Docker Hub** on clean scans
- 👤 Secrets managed via **GitHub Encrypted Secrets**
- ✅ `npm ci` + `package-lock.json` to ensure deterministic builds

---

## 🏗️ Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | HTML + Vanilla JS  |
| Backend     | Node.js + Express  |
| Database    | MongoDB            |
| Container   | Docker, Docker Compose |
| Architecture| 3-tier (Frontend, API, DB) |
| Security    | GitHub Actions + Trivy |

---

## 📁 Folder Structure

project/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── README.md
├── backend/
│ ├── app.js
│ ├── package.json
│ ├── .env.sample
│ ├── routes/
│ │ └── todos.js
│ └── models/
│ └── todo.js
└── frontend/
├── index.html
└── script.js


## 🚀 Docker Hub

Latest image: [`priyanshpandey/todo-app:latest`](https://hub.docker.com/repository/docker/priyanshpandey/todo-app)

Built and pushed via GitHub Actions CI/CD.

---

## 🧪 Run Locally

```bash
git clone https://github.com/Priyansh-Pandey/3-tier-node-todo-app.git
cd 3-tier-node-todo-app
docker compose up --build


App will be available at http://{you-ip}:3000
