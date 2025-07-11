# 📝 Advanced ToDo List App (Dockerized Full Stack)

A feature-rich ToDo application with reminders, task status management, and MongoDB persistence — built using Node.js, Express, and Docker with multi-stage builds.

---

## 📦 Features

- ✅ Add, view, and delete tasks
- 🟡 Mark tasks as **Pending** or **Done**
- ⏰ Support for **reminders** via `dueDate`
- 📂 Fully containerized using **Docker & Docker Compose**
- 🗄️ Backend: Node.js + Express + MongoDB
- 🌐 Frontend: HTML + JS + Nginx or Express static server
- 🔒 Secure by default: uses `.env` for secrets

---

## 🏗️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | HTML + Vanilla JS  |
| Backend    | Node.js + Express  |
| Database   | MongoDB            |
| Container  | Docker, Docker Compose |
| Architecture | 3-tier (Frontend, API, DB) |

---

## 🧱 Folder Structure


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

