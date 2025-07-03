# RightStudio CI/CD Quick Setup Guide

## 🚀 Quick Start

This guide will help you set up the CI/CD pipeline for your RightStudio project on Digital Ocean droplets in under 30 minutes.

## Prerequisites

- 2 Digital Ocean droplets (Development & Production)
- GitHub repository with your RightStudio project
- Domain names configured for each environment
- SSH access to your droplets

## Step 1: GitHub Repository Setup (5 minutes)

### 1.1 Add GitHub Secrets

Go to your GitHub repository → `Settings` → `Secrets and variables` → `Actions` and add these secrets:

**Development Environment:**

```
DEV_HOST=your-dev-droplet-ip
DEV_USERNAME=root
DEV_PORT=22
DEV_SSH_PRIVATE_KEY=your-ssh-private-key
DEV_APP_URL=https://dev.yourdomain.com
DEV_DOCS_URL=https://dev-docs.yourdomain.com
```

**Production Environment:**

```
PROD_HOST=your-prod-droplet-ip
PROD_USERNAME=root
PROD_PORT=22
PROD_SSH_PRIVATE_KEY=your-ssh-private-key
PROD_APP_URL=https://app.yourdomain.com
PROD_DOCS_URL=https://docs.yourdomain.com
PROD_DOMAIN=app.yourdomain.com
```

**Shared Secrets:**

```
NEXTAUTH_SECRET=your-nextauth-secret
SURREAL_USER=rgtg_admin
SURREAL_PASSWORD=your-surrealdb-password
SURREAL_DB=rgtg
SURREAL_NS=rgtg
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
SLACK_WEBHOOK_URL=your-slack-webhook-url
```

### 1.2 Generate SSH Key

```bash
# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Copy public key to droplets
ssh-copy-id root@your-dev-droplet-ip
ssh-copy-id root@your-prod-droplet-ip

# Copy private key content to GitHub secret
cat ~/.ssh/id_rsa
```

## Step 2: Digital Ocean Droplet Setup (10 minutes)

### 2.1 Development Droplet Setup

SSH into your development droplet and run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" -y
sudo apt update
sudo apt install docker-ce -y

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Enable Docker on boot
sudo systemctl enable docker
sudo systemctl start docker

# Create app directory
mkdir -p ~/rightstudio
cd ~/rightstudio

# Clone repository
git clone https://github.com/your-username/RightStudio.git .
```

### 2.2 Production Droplet Setup

Repeat the same steps on your production droplet.

## Step 3: Domain Configuration (5 minutes)

### 3.1 DNS Setup

Configure your domain DNS:

- `dev.yourdomain.com` → Development droplet IP
- `app.yourdomain.com` → Production droplet IP

### 3.2 SSL Certificates

The deployment will automatically handle SSL certificates using Let's Encrypt.

## Step 4: Environment Configuration (5 minutes)

### 4.1 Development Environment

On development droplet, create `.env` file:

```bash
cd ~/rightstudio
cat > .env <<EOL
# App URLs
NEXT_PUBLIC_APP_URL=https://dev.yourdomain.com
NEXT_PUBLIC_DOCS_URL=https://dev-docs.yourdomain.com
NEXTAUTH_URL=https://dev.yourdomain.com/api/auth
NEXTAUTH_SECRET=your-nextauth-secret

# SurrealDB Configuration
NEXT_PUBLIC_SURREALDB_CONNECTION=ws://surrealdb:8000
NEXT_PUBLIC_SURREALDB_USERNAME=rgtg_admin
NEXT_PUBLIC_SURREALDB_PASSWORD=your-surrealdb-password
NEXT_PUBLIC_SURREALDB_DB=rgtg
NEXT_PUBLIC_SURREALDB_NS=rgtg

# Other Settings
NODE_ENV=development
SKIP_EXTERNAL_CONNECTIONS=false
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
EOL
```

### 4.2 Production Environment

On production droplet, create `.env` file:

```bash
cd ~/rightstudio
cat > .env <<EOL
# App URLs
NEXT_PUBLIC_APP_URL=https://app.yourdomain.com
NEXT_PUBLIC_DOCS_URL=https://docs.yourdomain.com
NEXTAUTH_URL=https://app.yourdomain.com/api/auth
NEXTAUTH_SECRET=your-nextauth-secret

# SurrealDB Configuration
NEXT_PUBLIC_SURREALDB_CONNECTION=ws://surrealdb:8000
NEXT_PUBLIC_SURREALDB_USERNAME=rgtg_admin
NEXT_PUBLIC_SURREALDB_PASSWORD=your-surrealdb-password
NEXT_PUBLIC_SURREALDB_DB=rgtg
NEXT_PUBLIC_SURREALDB_NS=rgtg

# Other Settings
NODE_ENV=production
SKIP_EXTERNAL_CONNECTIONS=false
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
EOL
```

## Step 5: Test Deployment (5 minutes)

### 5.1 Test Development Deployment

```bash
# On development droplet
cd ~/rightstudio
./scripts/deploy.sh development
```

### 5.2 Test Production Deployment

```bash
# On production droplet
cd ~/rightstudio
./scripts/deploy.sh production
```

## Step 6: Verify Setup

### 6.1 Check Health Endpoints

```bash
# Development
curl https://dev.yourdomain.com/api/health

# Production
curl https://app.yourdomain.com/api/health
```

### 6.2 Test CI/CD Pipeline

1. Push a change to `develop` branch → Should auto-deploy to development
2. Push a change to `main` branch → Should auto-deploy to production

## 🎉 You're Done!

Your CI/CD pipeline is now set up and ready to use!

## Usage

### Automatic Deployments

- Push to `develop` → Deploys to development
- Push to `main` → Deploys to production

### Manual Deployments

```bash
# Development
./scripts/deploy.sh development

# Production
./scripts/deploy.sh production
```

### Monitoring

```bash
# Start monitoring
./scripts/monitor.sh --daemon
```

## Next Steps

1. **Set up monitoring**: Configure the monitoring script as a systemd service
2. **Configure alerts**: Set up Slack/email notifications
3. **Add staging environment**: Create a staging branch and droplet
4. **Implement testing**: Add comprehensive tests to your pipeline

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**

   - Verify SSH keys are correctly added to GitHub secrets
   - Check firewall settings on droplets

2. **Docker Issues**

   - Ensure Docker is installed and running
   - Check available disk space

3. **SSL Certificate Issues**
   - Verify domain DNS is properly configured
   - Wait for DNS propagation (can take up to 24 hours)

### Get Help

- Check the full documentation: `docs/CI-CD-STRATEGY.md`
- Review GitHub Actions logs for detailed error information
- Check container logs: `docker-compose logs [service-name]`

## Security Notes

- Keep your SSH private keys secure
- Regularly rotate secrets and keys
- Monitor your deployments and logs
- Set up proper firewall rules on your droplets
