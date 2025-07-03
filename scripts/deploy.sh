#!/bin/bash

# RightStudio Deployment Script
# Usage: ./scripts/deploy.sh [environment] [options]
# Environments: development, staging, production

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
ENVIRONMENT=${1:-development}
FORCE_DEPLOY=${2:-false}
BACKUP_ENABLED=true
HEALTH_CHECK_TIMEOUT=60

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [environment] [options]"
    echo ""
    echo "Environments:"
    echo "  development  - Deploy to development environment"
    echo "  staging      - Deploy to staging environment"
    echo "  production   - Deploy to production environment"
    echo ""
    echo "Options:"
    echo "  --force      - Force deployment even if tests fail"
    echo "  --no-backup  - Skip backup creation (production only)"
    echo "  --help       - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 development"
    echo "  $0 production --force"
    echo "  $0 staging --no-backup"
}

# Function to validate environment
validate_environment() {
    case $ENVIRONMENT in
        development|staging|production)
            print_status "Deploying to $ENVIRONMENT environment"
            ;;
        *)
            print_error "Invalid environment: $ENVIRONMENT"
            show_usage
            exit 1
            ;;
    esac
}

# Function to check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."

    # Check if Docker is installed
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed"
        exit 1
    fi

    # Check if Docker Compose is installed
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed"
        exit 1
    fi

    # Check if .env file exists
    if [ ! -f .env ]; then
        print_error ".env file not found"
        exit 1
    fi

    print_success "Prerequisites check passed"
}

# Function to create backup
create_backup() {
    if [ "$ENVIRONMENT" = "production" ] && [ "$BACKUP_ENABLED" = true ]; then
        print_status "Creating backup..."

        BACKUP_DIR="backup-$(date +%Y%m%d-%H%M%S)"
        mkdir -p ~/backups/$BACKUP_DIR

        # Copy current application files
        cp -r . ~/backups/$BACKUP_DIR/

        # Create database backup if possible
        if docker-compose -f compose.prod.yaml exec -T surrealdb surreal export --conn ws://localhost:8000 --user rgtg_admin --pass bWFubnk6c0FzMyp6MnAh --ns rgtg --db rgtg > ~/backups/$BACKUP_DIR/database_backup.sql 2>/dev/null; then
            print_success "Database backup created"
        else
            print_warning "Could not create database backup"
        fi

        print_success "Backup created: ~/backups/$BACKUP_DIR"
    fi
}

# Function to pull latest changes
pull_changes() {
    print_status "Pulling latest changes from Git..."

    # Determine branch based on environment
    case $ENVIRONMENT in
        development)
            BRANCH="develop"
            ;;
        staging)
            BRANCH="staging"
            ;;
        production)
            BRANCH="main"
            ;;
    esac

    git fetch origin
    git checkout $BRANCH
    git pull origin $BRANCH

    print_success "Latest changes pulled from $BRANCH branch"
}

# Function to update environment variables
update_env() {
    print_status "Updating environment variables..."

    # This would typically be handled by the CI/CD pipeline
    # For manual deployments, ensure .env file is properly configured
    if [ ! -f .env ]; then
        print_error ".env file not found. Please create one based on .env.example"
        exit 1
    fi

    print_success "Environment variables updated"
}

# Function to deploy application
deploy_application() {
    print_status "Deploying application..."

    # Determine compose file based on environment
    case $ENVIRONMENT in
        development)
            COMPOSE_FILE="compose.dev.yaml"
            ;;
        staging|production)
            COMPOSE_FILE="compose.prod.yaml"
            ;;
    esac

    # Pull latest Docker images
    print_status "Pulling latest Docker images..."
    docker-compose -f $COMPOSE_FILE pull

    # Stop existing containers
    print_status "Stopping existing containers..."
    docker-compose -f $COMPOSE_FILE down

    # Start services with new images
    print_status "Starting services..."
    docker-compose -f $COMPOSE_FILE up -d --build

    # Clean up unused images
    print_status "Cleaning up unused Docker images..."
    docker image prune -f

    print_success "Application deployed successfully"
}

# Function to perform health check
health_check() {
    print_status "Performing health check..."

    # Wait for services to be ready
    print_status "Waiting for services to be ready..."
    sleep 30

    # Determine health check URL based on environment
    case $ENVIRONMENT in
        development)
            HEALTH_URL="http://localhost:3000/api/health"
            ;;
        staging|production)
            # This would be the actual domain in production
            HEALTH_URL="http://localhost:3000/api/health"
            ;;
    esac

    # Perform health check with retries
    for i in {1..10}; do
        if curl -f -s $HEALTH_URL > /dev/null; then
            print_success "Health check passed"
            return 0
        else
            print_warning "Health check attempt $i failed, retrying in 5 seconds..."
            sleep 5
        fi
    done

    print_error "Health check failed after 10 attempts"
    return 1
}

# Function to rollback
rollback() {
    print_error "Deployment failed, initiating rollback..."

    if [ "$ENVIRONMENT" = "production" ]; then
        # Find the most recent backup
        LATEST_BACKUP=$(ls -t ~/backups/ 2>/dev/null | head -n1)

        if [ -n "$LATEST_BACKUP" ]; then
            print_status "Rolling back to backup: $LATEST_BACKUP"

            # Stop current services
            docker-compose -f compose.prod.yaml down

            # Restore from backup
            rm -rf ./*
            cp -r ~/backups/$LATEST_BACKUP/* .

            # Restart services
            docker-compose -f compose.prod.yaml up -d

            print_success "Rollback completed successfully"
        else
            print_error "No backup found for rollback"
            exit 1
        fi
    else
        print_warning "Rollback not implemented for $ENVIRONMENT environment"
    fi
}

# Function to clean up old backups
cleanup_backups() {
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Cleaning up old backups..."

        # Keep only the last 5 backups
        cd ~/backups && ls -t | tail -n +6 | xargs -r rm -rf

        print_success "Old backups cleaned up"
    fi
}

# Function to send notifications
send_notification() {
    local status=$1
    local message=$2

    # This would integrate with your notification system (Slack, email, etc.)
    print_status "Sending $status notification: $message"

    # Example Slack notification (uncomment and configure as needed)
    # if [ -n "$SLACK_WEBHOOK_URL" ]; then
    #     curl -X POST -H 'Content-type: application/json' \
    #          --data "{\"text\":\"$message\"}" \
    #          $SLACK_WEBHOOK_URL
    # fi
}

# Main deployment function
main() {
    print_status "Starting deployment to $ENVIRONMENT environment"

    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --force)
                FORCE_DEPLOY=true
                shift
                ;;
            --no-backup)
                BACKUP_ENABLED=false
                shift
                ;;
            --help)
                show_usage
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                show_usage
                exit 1
                ;;
        esac
    done

    # Validate environment
    validate_environment

    # Check prerequisites
    check_prerequisites

    # Create backup (if enabled)
    create_backup

    # Pull latest changes
    pull_changes

    # Update environment variables
    update_env

    # Deploy application
    if deploy_application; then
        # Perform health check
        if health_check; then
            # Clean up old backups
            cleanup_backups

            # Send success notification
            send_notification "success" "Deployment to $ENVIRONMENT completed successfully! 🚀"

            print_success "Deployment completed successfully!"
            exit 0
        else
            # Health check failed, rollback
            rollback
            send_notification "failure" "Deployment to $ENVIRONMENT failed! ❌"
            exit 1
        fi
    else
        # Deployment failed, rollback
        rollback
        send_notification "failure" "Deployment to $ENVIRONMENT failed! ❌"
        exit 1
    fi
}

# Run main function with all arguments
main "$@"
