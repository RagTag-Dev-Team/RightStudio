#!/bin/bash

# Create directory for certificates
mkdir -p surrealdb/certs

# Generate private key
openssl genrsa -out surrealdb/certs/server.key 2048

# Generate CSR
openssl req -new -key surrealdb/certs/server.key -out surrealdb/certs/server.csr -subj "/CN=surrealdb"

# Generate self-signed certificate
openssl x509 -req -days 365 -in surrealdb/certs/server.csr -signkey surrealdb/certs/server.key -out surrealdb/certs/server.crt

# Set permissions
chmod 600 surrealdb/certs/server.key
chmod 644 surrealdb/certs/server.crt
