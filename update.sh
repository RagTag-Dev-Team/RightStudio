#!/bin/bash

# Script Vars
REPO_URL="https://github.com/mannyj37/RightStudio.git"
APP_DIR=~/rightstudio

# Function to check if a command succeeded
check_error() {
    if [ $? -ne 0 ]; then
        echo "Error: $1"
        exit 1
    fi
}

# Pull the latest changes from the Git repository
if [ -d "$APP_DIR" ]; then
    echo "Pulling latest changes from the repository..."
    cd $APP_DIR
    git pull origin main
    check_error "Failed to pull latest changes"
else
    echo "Cloning repository from $REPO_URL..."
    git clone $REPO_URL $APP_DIR
    check_error "Failed to clone repository"
    cd $APP_DIR
fi

# Clean up any existing build artifacts
echo "Cleaning up existing build artifacts..."
rm -rf .next
check_error "Failed to clean build artifacts"

# Build and restart the Docker containers from the app directory
echo "Rebuilding and restarting Docker containers..."
sudo docker-compose -f compose.prod.yaml down
check_error "Failed to stop containers"

# Remove any existing images to ensure a clean build
echo "Removing existing images..."
sudo docker-compose -f compose.prod.yaml rm -f
check_error "Failed to remove containers"

# Build and start the containers
echo "Building and starting containers..."
sudo docker-compose -f compose.prod.yaml up --build -d
check_error "Failed to build and start containers"

# Wait for containers to be healthy
echo "Waiting for containers to be healthy..."
sleep 10

# Check if Docker Compose started correctly
if ! sudo docker-compose -f compose.prod.yaml ps | grep "Up"; then
    echo "Docker containers failed to start. Checking logs..."
    sudo docker-compose -f compose.prod.yaml logs
    exit 1
fi

# Output final message
echo "Update complete. Your app and all services have been deployed with the latest changes:
- Next.js App (port 3000)
- SurrealDB (port 8000)
- PostgreSQL (port 5432)
- Redis (port 6379)
- ThirdWeb Engine (port 3005)

You can check the logs with: sudo docker-compose -f compose.prod.yaml logs -f"
