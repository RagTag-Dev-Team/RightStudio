#!/bin/bash

# RightStudio Monitoring Script
# Usage: ./scripts/monitor.sh [options]
# This script monitors the health of services and sends alerts if issues are detected

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
HEALTH_CHECK_URL="http://localhost:3000/api/health"
DISK_THRESHOLD=80
MEMORY_THRESHOLD=80
CPU_THRESHOLD=80
CHECK_INTERVAL=300  # 5 minutes
LOG_FILE="/var/log/rightstudio-monitor.log"
ALERT_COOLDOWN=3600  # 1 hour

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

# Function to log messages
log_message() {
    local level=$1
    local message=$2
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Function to check if alert was sent recently
check_alert_cooldown() {
    local alert_type=$1
    local cooldown_file="/tmp/rightstudio-alert-$alert_type"

    if [ -f "$cooldown_file" ]; then
        local last_alert=$(cat "$cooldown_file")
        local current_time=$(date +%s)
        local time_diff=$((current_time - last_alert))

        if [ $time_diff -lt $ALERT_COOLDOWN ]; then
            return 1  # Alert was sent recently
        fi
    fi

    return 0  # Can send alert
}

# Function to mark alert as sent
mark_alert_sent() {
    local alert_type=$1
    local cooldown_file="/tmp/rightstudio-alert-$alert_type"
    date +%s > "$cooldown_file"
}

# Function to send alert
send_alert() {
    local alert_type=$1
    local message=$2

    if check_alert_cooldown "$alert_type"; then
        print_error "ALERT: $message"
        log_message "ALERT" "$message"

        # Send notification (configure as needed)
        # Example: Slack notification
        if [ -n "$SLACK_WEBHOOK_URL" ]; then
            curl -X POST -H 'Content-type: application/json' \
                 --data "{\"text\":\"🚨 RightStudio Alert: $message\"}" \
                 "$SLACK_WEBHOOK_URL" > /dev/null 2>&1
        fi

        # Example: Email notification
        if [ -n "$ALERT_EMAIL" ]; then
            echo "$message" | mail -s "RightStudio Alert: $alert_type" "$ALERT_EMAIL"
        fi

        mark_alert_sent "$alert_type"
    fi
}

# Function to check application health
check_app_health() {
    print_status "Checking application health..."

    if curl -f -s "$HEALTH_CHECK_URL" > /dev/null 2>&1; then
        print_success "Application is healthy"
        log_message "INFO" "Application health check passed"
        return 0
    else
        local message="Application health check failed"
        print_error "$message"
        log_message "ERROR" "$message"
        send_alert "app_health" "$message"
        return 1
    fi
}

# Function to check Docker containers
check_docker_containers() {
    print_status "Checking Docker containers..."

    local unhealthy_containers=$(docker ps --filter "health=unhealthy" --format "table {{.Names}}\t{{.Status}}" 2>/dev/null | tail -n +2)

    if [ -z "$unhealthy_containers" ]; then
        print_success "All Docker containers are healthy"
        log_message "INFO" "Docker containers health check passed"
        return 0
    else
        local message="Unhealthy Docker containers detected: $unhealthy_containers"
        print_error "$message"
        log_message "ERROR" "$message"
        send_alert "docker_health" "$message"
        return 1
    fi
}

# Function to check disk usage
check_disk_usage() {
    print_status "Checking disk usage..."

    local disk_usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')

    if [ "$disk_usage" -lt "$DISK_THRESHOLD" ]; then
        print_success "Disk usage is normal: ${disk_usage}%"
        log_message "INFO" "Disk usage check passed: ${disk_usage}%"
        return 0
    else
        local message="High disk usage detected: ${disk_usage}%"
        print_warning "$message"
        log_message "WARNING" "$message"
        send_alert "disk_usage" "$message"
        return 1
    fi
}

# Function to check memory usage
check_memory_usage() {
    print_status "Checking memory usage..."

    local memory_usage=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')

    if [ "$memory_usage" -lt "$MEMORY_THRESHOLD" ]; then
        print_success "Memory usage is normal: ${memory_usage}%"
        log_message "INFO" "Memory usage check passed: ${memory_usage}%"
        return 0
    else
        local message="High memory usage detected: ${memory_usage}%"
        print_warning "$message"
        log_message "WARNING" "$message"
        send_alert "memory_usage" "$message"
        return 1
    fi
}

# Function to check CPU usage
check_cpu_usage() {
    print_status "Checking CPU usage..."

    local cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}' | awk -F'.' '{print $1}')

    if [ "$cpu_usage" -lt "$CPU_THRESHOLD" ]; then
        print_success "CPU usage is normal: ${cpu_usage}%"
        log_message "INFO" "CPU usage check passed: ${cpu_usage}%"
        return 0
    else
        local message="High CPU usage detected: ${cpu_usage}%"
        print_warning "$message"
        log_message "WARNING" "$message"
        send_alert "cpu_usage" "$message"
        return 1
    fi
}

# Function to check database connectivity
check_database() {
    print_status "Checking database connectivity..."

    # Check if SurrealDB is responding
    if docker exec next-app curl -f -s "ws://surrealdb:8000" > /dev/null 2>&1; then
        print_success "Database connectivity is healthy"
        log_message "INFO" "Database connectivity check passed"
        return 0
    else
        local message="Database connectivity check failed"
        print_error "$message"
        log_message "ERROR" "$message"
        send_alert "database_health" "$message"
        return 1
    fi
}

# Function to check Redis connectivity
check_redis() {
    print_status "Checking Redis connectivity..."

    # Check if Redis is responding
    if docker exec next-app redis-cli -h redis ping > /dev/null 2>&1; then
        print_success "Redis connectivity is healthy"
        log_message "INFO" "Redis connectivity check passed"
        return 0
    else
        local message="Redis connectivity check failed"
        print_error "$message"
        log_message "ERROR" "$message"
        send_alert "redis_health" "$message"
        return 1
    fi
}

# Function to check SSL certificate expiration
check_ssl_certificate() {
    print_status "Checking SSL certificate..."

    # Get the domain from environment or use default
    local domain=${DOMAIN_NAME:-"app.rightstudio.media"}

    if command -v openssl > /dev/null 2>&1; then
        local cert_expiry=$(echo | openssl s_client -servername "$domain" -connect "$domain:443" 2>/dev/null | openssl x509 -noout -dates | grep notAfter | cut -d= -f2)

        if [ -n "$cert_expiry" ]; then
            local expiry_date=$(date -d "$cert_expiry" +%s)
            local current_date=$(date +%s)
            local days_until_expiry=$(( (expiry_date - current_date) / 86400 ))

            if [ $days_until_expiry -gt 30 ]; then
                print_success "SSL certificate is valid for $days_until_expiry days"
                log_message "INFO" "SSL certificate check passed: $days_until_expiry days remaining"
                return 0
            else
                local message="SSL certificate expires in $days_until_expiry days"
                print_warning "$message"
                log_message "WARNING" "$message"
                send_alert "ssl_certificate" "$message"
                return 1
            fi
        else
            print_warning "Could not check SSL certificate expiration"
            return 0
        fi
    else
        print_warning "OpenSSL not available, skipping SSL certificate check"
        return 0
    fi
}

# Function to perform all health checks
perform_health_checks() {
    print_status "Starting health checks..."

    local failed_checks=0

    # Check application health
    if ! check_app_health; then
        ((failed_checks++))
    fi

    # Check Docker containers
    if ! check_docker_containers; then
        ((failed_checks++))
    fi

    # Check system resources
    if ! check_disk_usage; then
        ((failed_checks++))
    fi

    if ! check_memory_usage; then
        ((failed_checks++))
    fi

    if ! check_cpu_usage; then
        ((failed_checks++))
    fi

    # Check database connectivity
    if ! check_database; then
        ((failed_checks++))
    fi

    # Check Redis connectivity
    if ! check_redis; then
        ((failed_checks++))
    fi

    # Check SSL certificate
    if ! check_ssl_certificate; then
        ((failed_checks++))
    fi

    if [ $failed_checks -eq 0 ]; then
        print_success "All health checks passed"
        log_message "INFO" "All health checks completed successfully"
    else
        print_warning "$failed_checks health check(s) failed"
        log_message "WARNING" "$failed_checks health check(s) failed"
    fi

    return $failed_checks
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [options]"
    echo ""
    echo "Options:"
    echo "  --once       - Run health checks once and exit"
    echo "  --daemon     - Run health checks continuously (default)"
    echo "  --interval N - Set check interval in seconds (default: 300)"
    echo "  --help       - Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  SLACK_WEBHOOK_URL - Slack webhook URL for alerts"
    echo "  ALERT_EMAIL       - Email address for alerts"
    echo "  DOMAIN_NAME       - Domain name for SSL certificate check"
    echo ""
    echo "Examples:"
    echo "  $0 --once"
    echo "  $0 --daemon --interval 600"
}

# Function to run in daemon mode
run_daemon() {
    print_status "Starting monitoring daemon with $CHECK_INTERVAL second intervals..."

    while true; do
        perform_health_checks
        sleep $CHECK_INTERVAL
    done
}

# Main function
main() {
    local run_once=false

    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --once)
                run_once=true
                shift
                ;;
            --daemon)
                run_once=false
                shift
                ;;
            --interval)
                CHECK_INTERVAL=$2
                shift 2
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

    # Create log directory if it doesn't exist
    mkdir -p "$(dirname "$LOG_FILE")"

    print_status "RightStudio Monitoring Script Started"
    log_message "INFO" "Monitoring script started"

    if [ "$run_once" = true ]; then
        perform_health_checks
    else
        run_daemon
    fi
}

# Run main function with all arguments
main "$@"
