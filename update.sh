#!/bin/bash

# Script Vars
REPO_URL="https://github.com/mannyj37/RightStudio.git"
APP_DIR=~/rightstudio

# Pull the latest changes from the Git repository
if [ -d "$APP_DIR" ]; then
  echo "Pulling latest changes from the repository..."
  cd $APP_DIR
  git pull origin main
else
  echo "Cloning repository from $REPO_URL..."
  git clone $REPO_URL $APP_DIR
  cd $APP_DIR
fi

# Build and restart the Docker containers from the app directory
echo "Rebuilding and restarting Docker containers..."
sudo docker-compose -f compose.prod.yaml down
sudo docker-compose -f compose.prod.yaml up --build -d

# Check if Docker Compose started correctly
if ! sudo docker-compose -f compose.prod.yaml ps | grep "Up"; then
  echo "Docker containers failed to start. Check logs with 'docker-compose logs'."
  exit 1
fi

# Output final message
echo "Update complete. Your app and all services have been deployed with the latest changes:
- Next.js App (port 3000)
- SurrealDB (port 8000)
- PostgreSQL (port 5432)
- Redis (port 6379)
- ThirdWeb Engine (port 3005)"
