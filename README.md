# Docker & K3s Frontend Deployment

## 📌 Project Overview

This project demonstrates a practical DevOps workflow for containerizing and deploying a frontend web application using Docker and Kubernetes.

The frontend application is built using HTML, CSS, and JavaScript, served through Nginx, and packaged as a Docker image.

The application is deployed to a lightweight Kubernetes cluster using K3s running inside an Ubuntu Virtual Machine.

GitHub Actions is also used to build the Docker image and publish it to GitHub Container Registry (GHCR).

---

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

---

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
    | Pull Docker Image
    v
K3s / Kubernetes Cluster
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

---

## 🐳 Docker Containerization

The frontend application is served using Nginx inside a Docker container.

Build the Docker image:

```bash
docker build -t frontend-app .
```

Run the container:

```bash
docker run -d -p 8080:80 --name myfrontend frontend-app
```

---

## ☸️ Kubernetes Deployment with K3s

The containerized application is deployed to a lightweight Kubernetes cluster using K3s.

Deploy the application:

```bash
kubectl apply -f deployment.yaml
```

Check the deployment:

```bash
kubectl get deployment
```

Check the pods:

```bash
kubectl get pods
```

Check the service:

```bash
kubectl get svc
```

The application is exposed using a Kubernetes NodePort service on port:

```text
30080
```

---

## 📈 Application Scaling

The deployment runs three replicas of the frontend application.

```bash
kubectl scale deployment frontend-deployment --replicas=3
```

This allows Kubernetes to maintain multiple running instances of the application.

---

## 🔄 Rolling Updates

A second version of the frontend application was created and deployed using a Kubernetes rolling update.

The Docker image was versioned as:

```text
frontend-app:v2
```

The deployment was updated without stopping all running application instances at once.

The rollout was monitored using:

```bash
kubectl rollout status deployment/frontend-deployment
```

This demonstrated how Kubernetes can gradually replace old application pods with a new version while maintaining service availability.

---

## ❤️ Readiness and Liveness Probes

Health checks were configured in the Kubernetes deployment.

### Readiness Probe

The readiness probe verifies that a container is ready before Kubernetes sends traffic to it.

### Liveness Probe

The liveness probe checks whether the application remains healthy while running.

The liveness probe was tested by temporarily configuring an invalid health-check path.

Kubernetes detected the failed health checks and restarted the affected containers.

The correct health-check path was then restored.

---

## ♻️ Pod Replacement Test

Kubernetes desired-state reconciliation was tested by manually deleting one running pod.

```bash
kubectl delete pod <pod-name>
```

The Deployment automatically created a replacement pod to maintain the configured three replicas.

---

## ⚡ Resource Management

CPU and memory requests and limits were configured for the frontend containers.

```yaml
resources:
  requests:
    cpu: "50m"
    memory: "64Mi"
  limits:
    cpu: "200m"
    memory: "128Mi"
```

This demonstrates basic Kubernetes resource management.

---

## ⚙️ CI with GitHub Actions

GitHub Actions is configured to run when changes are pushed to the main branch.

The workflow:

1. Checks out the source code
2. Verifies the required project files
3. Logs in to GitHub Container Registry
4. Builds the Docker image
5. Pushes the Docker image to GHCR

---

## 📦 GitHub Container Registry

The Docker image is published to GitHub Container Registry:

```text
ghcr.io/dissaanayake-23/frontend-app:latest
```

This allows the container image to be stored in a remote registry and used by the deployment workflow.

---

## ✅ Features Demonstrated

- Docker containerization
- Nginx web hosting
- Ubuntu Linux environment
- K3s Kubernetes cluster
- Kubernetes Deployments
- Three application replicas
- NodePort service
- Rolling updates
- Readiness probes
- Liveness probes
- Automatic container restart after failed health checks
- Pod replacement and desired-state reconciliation
- CPU and memory resource management
- Git version control
- GitHub Actions CI
- GitHub Container Registry
- Automated Docker image build and publishing

---

## 📚 What I Learned

Through this project, I gained practical experience with containerization and Kubernetes-based application deployment.

I learned how to build and run Docker containers, deploy applications using K3s, manage multiple replicas, expose applications through Kubernetes services, perform rolling updates, configure health checks, manage container resources, and observe Kubernetes maintaining the desired application state.

I also gained experience using GitHub Actions and GitHub Container Registry as part of a basic DevOps CI workflow.
