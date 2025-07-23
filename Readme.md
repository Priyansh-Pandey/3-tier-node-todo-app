
# 📝 Advanced ToDo List App (Dockerized Full Stack)

![CI](https://github.com/Priyansh-Pandey/3-tier-node-todo-app/actions/workflows/docker-publish.yml/badge.svg)

A feature-rich ToDo application with reminders, task status management, and MongoDB persistence — built using Node.js, Express, and Docker with multi-stage builds. Includes CI/CD pipelines, image scanning, and optional Jenkins-based security tooling.

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

## 🛡️ DevSecOps Highlights (GitHub Actions)

- 🔐 **Trivy image scanning** integrated via GitHub Actions
- 🧪 CI pipeline **fails on HIGH/CRITICAL CVEs**
- 📤 **Auto-push to Docker Hub** on clean scans
- 👤 Secrets managed via **GitHub Encrypted Secrets**
- ✅ `npm ci` + `package-lock.json` for deterministic builds

---

## 🏗️ Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | HTML + Vanilla JS  |
| Backend     | Node.js + Express  |
| Database    | MongoDB            |
| Container   | Docker, Docker Compose |
| Architecture| 3-tier (Frontend, API, DB) |
| CI/CD       | GitHub Actions     |
| Security    | Trivy, SonarQube, OWASP DC |

---

## 📁 Folder Structure

```
project/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── README.md
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── .env.sample
│   ├── routes/
│   │   └── todos.js
│   └── models/
│       └── todo.js
└── frontend/
    ├── index.html
    └── script.js
```

---

## 🚀 Docker Hub

Image: [`priyansh26/todo-app:latest`](https://hub.docker.com/repository/docker/priyansh26/todo-app/)

Built and pushed automatically via GitHub Actions.

---

## 🧪 Run Locally

```bash
git clone https://github.com/Priyansh-Pandey/3-tier-node-todo-app.git
cd 3-tier-node-todo-app
docker compose up --build
```

App will be available at:  
`http://<your-ip>:3000`

---

## 🧩 Optional: Jenkins-Based Quality & Security Checks

In addition to GitHub Actions, you can use Jenkins for enhanced control and local CI/CD with quality/security tooling.

### 1. 🔍 SonarQube Integration

- **Run SonarQube via Docker**:
  ```bash
  docker run -d --name sonarqube -p 9000:9000 sonarqube
  ```
- **Integrate with Jenkins**:
  - Install **SonarQube Scanner** and **SonarQube plugin**
  - Add SonarQube token as a **Global Jenkins Credential**
  - Configure server URL under **Manage Jenkins → Configure System**

- **Sample pipeline snippet**:
  ```groovy
  withSonarQubeEnv('SonarQube') {
    sh 'sonar-scanner'
  }
  ```

### 2. ✅ Enforce Sonar Quality Gates

- Add a post-scan validation step:
  ```groovy
  waitForQualityGate abortPipeline: true
  ```

### 3. 🧰 OWASP Dependency-Check

- Install **OWASP Dependency-Check Plugin** in Jenkins
- Add as a build step in freestyle jobs or as a pipeline stage
- Generates vulnerability reports for npm dependencies

- **Pipeline example**:
  ```groovy
  dependencyCheck additionalArguments: '--format ALL', odcInstallation: 'Default'
  ```

### 4. ⚙️ Trivy Container Scanning

- **Trivy installed locally** on Jenkins agent
- Pipeline stage example:
  ```groovy
  sh 'trivy image priyansh26/todo-app:latest'
  ```

- You can conditionally fail builds:
  ```groovy
  sh 'trivy image --severity CRITICAL --exit-code 1 priyansh26/todo-app:latest'
  ```

---

## 📌 CI/CD Flow Summary

| Tool           | Purpose                                | Integration       |
|----------------|----------------------------------------|-------------------|
| GitHub Actions | CI + Trivy scan + Docker push          | `.github/workflows/` |
| Jenkins        | Code quality, dependency scan, Trivy   | `Jenkinsfile`     |
| Docker         | Containerization                       | Local & CI usage  |
| Docker Hub     | Image hosting                          | Auto push on CI   |
| SonarQube      | Static Code Analysis                   | Jenkins integration |
| OWASP DC       | Dependency Vulnerability Scan          | Jenkins Plugin    |

---

## 🙌 Author

👤 **Priyansh Pandey**  
📎 GitHub: [@Priyansh-Pandey](https://github.com/Priyansh-Pandey)

---

## 📄 License

This project is licensed under the MIT License.

---

---

## ⚙️ Jenkinsfile Usage (Declarative Pipeline)

You can use the provided `Jenkinsfile` to run a full declarative pipeline that includes:

- Docker image build and push
- Trivy scanning for vulnerabilities
- SonarQube static code analysis with Quality Gate enforcement
- OWASP Dependency Check

### 📄 Location
The `Jenkinsfile` is located at:  
```bash
Jenkins/script/Jenkinsfile
```

### 🚀 How to Use in Jenkins

1. **Set up Jenkins with required plugins**:  
   - Pipeline  
   - OWASP Dependency-Check  
   - SonarQube Scanner  
   - Docker

2. **Connect your GitHub repo** using a Multibranch Pipeline or SCM-triggered job.

3. Jenkins will automatically detect the `Jenkins/script/Jenkinsfile` and execute it as part of your CI/CD pipeline.

Make sure to configure Jenkins global credentials for Docker Hub, SonarQube token, and any other secrets referenced in the pipeline.

---
