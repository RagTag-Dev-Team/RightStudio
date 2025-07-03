#!/bin/bash

# Env Vars
SURREAL_USER="rgtg_admin"
SURREAL_PASSWORD="bWFubnk6c0FzMyp6MnAh"
NEXTAUTH_SECRET="4gGjs8xEUbYTpbK9CzBZjKVGsSNlyXohMx7U7D2ItZA"
NEXT_PUBLIC_APP_URL="https://app.rightstudio.media"
NEXT_PUBLIC_DOCS_URL="https://docs.rightstudio.media"
NEXT_PUBLIC_SURREALDB_DB="rgtg"
NEXT_PUBLIC_SURREALDB_NS="rgtg"
DOMAIN_NAME="app.rightstudio.media"
EMAIL="your-email@example.com" # replace with your own

# Script Vars
REPO_URL="https://github.com/mannyj37/RightStudio.git"
APP_DIR=~/rightstudio
SWAP_SIZE="1G"  # Swap size of 1GB

# Update package list and upgrade existing packages
sudo apt update && sudo apt upgrade -y

# Add Swap Space
echo "Adding swap space..."
sudo fallocate -l $SWAP_SIZE /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make swap permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Install Docker
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" -y
sudo apt update
sudo apt install docker-ce -y

# Install Docker Compose
sudo rm -f /usr/local/bin/docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Wait for the file to be fully downloaded before proceeding
if [ ! -f /usr/local/bin/docker-compose ]; then
  echo "Docker Compose download failed. Exiting."
  exit 1
fi

sudo chmod +x /usr/local/bin/docker-compose

# Ensure Docker Compose is executable and in path
sudo ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose

# Verify Docker Compose installation
docker-compose --version
if [ $? -ne 0 ]; then
  echo "Docker Compose installation failed. Exiting."
  exit 1
fi

# Ensure Docker starts on boot and start Docker service
sudo systemctl enable docker
sudo systemctl start docker

# Clone the Git repository
if [ -d "$APP_DIR" ]; then
  echo "Directory $APP_DIR already exists. Pulling latest changes..."
  cd $APP_DIR && git pull
else
  echo "Cloning repository from $REPO_URL..."
  git clone $REPO_URL $APP_DIR
  cd $APP_DIR
fi

# Create the .env file inside the app directory
cat > "$APP_DIR/.env" <<EOL
# App URLs
NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
NEXT_PUBLIC_DOCS_URL=$NEXT_PUBLIC_DOCS_URL
NEXTAUTH_URL=$NEXT_PUBLIC_APP_URL/api/auth
NEXTAUTH_SECRET=$NEXTAUTH_SECRET

# SurrealDB Configuration
NEXT_PUBLIC_SURREALDB_CONNECTION=ws://surrealdb:8000
NEXT_PUBLIC_SURREALDB_USERNAME=$SURREAL_USER
NEXT_PUBLIC_SURREALDB_PASSWORD=$SURREAL_PASSWORD
NEXT_PUBLIC_SURREALDB_DB=$NEXT_PUBLIC_SURREALDB_DB
NEXT_PUBLIC_SURREALDB_NS=$NEXT_PUBLIC_SURREALDB_NS

# Other Settings
NODE_ENV=production
SKIP_EXTERNAL_CONNECTIONS=false
EOL

# Install Nginx
sudo apt install nginx -y

# Remove old Nginx config (if it exists)
sudo rm -f /etc/nginx/sites-available/rightstudio
sudo rm -f /etc/nginx/sites-enabled/rightstudio

# Stop Nginx temporarily to allow Certbot to run in standalone mode
sudo systemctl stop nginx

# Obtain SSL certificate using Certbot standalone mode
sudo apt install certbot -y
sudo certbot certonly --standalone -d $DOMAIN_NAME --non-interactive --agree-tos -m $EMAIL

# Ensure SSL files exist or generate them
if [ ! -f /etc/letsencrypt/options-ssl-nginx.conf ]; then
  sudo wget https://raw.githubusercontent.com/certbot/certbot/main/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf -P /etc/letsencrypt/
fi

if [ ! -f /etc/letsencrypt/ssl-dhparams.pem ]; then
  sudo openssl dhparam -out /etc/letsencrypt/ssl-dhparams.pem 2048
fi

# Create Nginx config with reverse proxy, SSL support, rate limiting, and streaming support
sudo cat > /etc/nginx/sites-available/rightstudio <<EOL
limit_req_zone \$binary_remote_addr zone=mylimit:10m rate=10r/s;

server {
    listen 80;
    server_name $DOMAIN_NAME;

    # Redirect all HTTP requests to HTTPS
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name $DOMAIN_NAME;

    ssl_certificate /etc/letsencrypt/live/$DOMAIN_NAME/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN_NAME/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Enable rate limiting
    limit_req zone=mylimit burst=20 nodelay;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;

        # Disable buffering for streaming support
        proxy_buffering off;
        proxy_set_header X-Accel-Buffering no;
    }
}
EOL

# Create symbolic link if it doesn't already exist
sudo ln -s /etc/nginx/sites-available/rightstudio /etc/nginx/sites-enabled/rightstudio

# Restart Nginx to apply the new configuration
sudo systemctl restart nginx

# Build and run the Docker containers from the app directory
cd $APP_DIR
sudo docker-compose -f compose.prod.yaml up --build -d

# Check if Docker Compose started correctly
if ! sudo docker-compose -f compose.prod.yaml ps | grep "Up"; then
  echo "Docker containers failed to start. Check logs with 'docker-compose logs'."
  exit 1
fi

# Output final message
echo "Deployment complete. Your Next.js app and all services are now running.
Next.js is available at https://$DOMAIN_NAME

The following services are running:
- Next.js App (port 3000)
- SurrealDB (port 8000)
- Redis (port 6379)

The .env file has been created with all necessary configuration values."
