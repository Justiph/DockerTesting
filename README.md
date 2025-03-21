# DockerComposeTesting

## Overview

This project is a simple Node.js and MongoDB application designed to help you get familiar with Docker and Docker Compose. It includes a basic JavaScript application (`app.js`) that is containerized using Docker and orchestrated with Docker Compose. The goal is to demonstrate how to set up, build, and run a containerized application using these tools.

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install the dependencies

```bash
cd server
npm install
```

### 3. Create a **.dockerignore**

To prevent unnecessary files from being copied to the image:

```lua
node_modules
npm-debug.log
```

### 4. Build and start Containers

- Run:

```bash
docker-compose up -d
```

- Checking running containers:

```bash
docker ps
```

- Open the app
  Visit [http://localhost:4000] -> You should see:

```
Hello from Docker Compose!
```

- Stop and Remove Containers

```bash
docker-compose down
```

This stops and removes containers but keeps volumes.
