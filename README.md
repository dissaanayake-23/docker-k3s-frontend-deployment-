# Docker & K3s Frontend Deployment

A hands-on DevOps project demonstrating how a frontend web application can be containerized with Docker, deployed on a lightweight Kubernetes cluster using K3s, and integrated with GitHub Actions and GitHub Container Registry (GHCR).

## 🚀 Project Overview

This project started with a simple frontend application built using HTML, CSS, and JavaScript.

The application is served using Nginx and packaged as a Docker image. It is then deployed to a K3s Kubernetes cluster running inside an Ubuntu Virtual Machine.

GitHub Actions is used to automatically build the Docker image and publish it to GitHub Container Registry (GHCR).

## 🛠 Technologies Used

- HTML
- CSS
- JavaScript
- Nginx
- Docker
- Ubuntu Linux
- K3s
- Kubernetes
- Git & GitHub
- GitHub Actions
- GitHub Container Registry (GHCR)
- VirtualBox

## 🏗 Architecture

```text
Developer
    |
    v
GitHub Repository
    |
    v
GitHub Actions
    |
    | Build Docker Image
    v
GitHub Container Registry (GHCR)
    |
    | Pull Image
    v
K3s / Kubernetes
    |
    v
Kubernetes Deployment
   /      |      \
  v       v       v
Pod 1    Pod 2    Pod 3
   \      |      /
    v     v     v
   NodePort Service
          |
          v
    Frontend Website
```

## 🐳 Docker

The frontend application is served using Nginx inside a Docker container.

Build the image:

```bash
docker build -t frontend-app .
```

Run the container:

```bash
docker run -d -p 8080:80 --name myfrontend frontend-app
```

## ☸️ Kubernetes with K3s

The application is deployed to a lightweight Kubernetes cluster using K3s.

Deploy the application:

```bash
kubectl apply -f deployment.yaml
```

Check the pods:

```bash
kubectl get pods
```

Check the service:

```bash
kubectl get svc
```

## 📈 Scaling

The deployment was scaled to three replicas:

```bash
kubectl scale deployment frontend-deployment --replicas=3
```

Kubernetes then runs three instances of the frontend application.

## ♻️ Self-Healing Test

Self-healing was tested by manually deleting one of the running pods.

```bash
kubectl delete pod <pod-name>
```

Kubernetes automatically created a replacement pod to maintain the desired number of replicas.

## ⚙️ CI with GitHub Actions

GitHub Actions runs automatically when changes are pushed to the `main` branch.

The workflow:

1. Checks out the source code
2. Verifies the required project files
3. Logs in to GHCR
4. Builds the Docker image
5. Pushes the Docker image to GHCR

## 📦 GitHub Container Registry

The Docker image is published as:

```text
ghcr.io/dissaanayake-23/frontend-app:latest
```

The K3s deployment pulls this image from GHCR.

## ✅ Features Demonstrated

- Docker containerization
- Nginx web hosting
- Kubernetes deployment using K3s
- NodePort service
- Application scaling with multiple replicas
- Kubernetes self-healing
- Git version control
- GitHub Actions CI
- Automated Docker image build
- Docker image publishing to GHCR

## 📚 What I Learned

Through this project, I gained practical experience with Docker containerization, Kubernetes deployments, K3s, GitHub Actions, container registries, application scaling, and basic DevOps workflow automation.
