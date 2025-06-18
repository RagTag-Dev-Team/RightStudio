# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    openssl

RUN npm install -g pnpm

COPY src/prisma ./src/prisma/
COPY src/assets ./src/assets/

# Copy package files first to leverage Docker cache
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Set build-time environment variables with defaults
ARG NEXT_PUBLIC_APP_URL=https://app.rightstudio.media
ARG NEXT_PUBLIC_DOCS_URL=http://localhost:3001
ARG NEXTAUTH_URL=https://app.rightstudio.media/api/auth
ARG NEXTAUTH_SECRET=4gGjs8xEUbYTpbK9CzBZjKVGsSNlyXohMx7U7D2ItZA
ARG NEXT_PUBLIC_SURREALDB_CONNECTION=ws://surrealdb:8000
ARG NEXT_PUBLIC_SURREALDB_USERNAME=rgtg_admin
ARG NEXT_PUBLIC_SURREALDB_PASSWORD=bWFubnk6c0FzMyp6MnAh
ARG NEXT_PUBLIC_SURREALDB_DB=rgtg
ARG NEXT_PUBLIC_SURREALDB_NS=rgtg
ARG ENGINE_URL=https://thirdwebengine:3005
ARG ENGINE_SECRET_KEY=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweDhlQUI3NTA5MTZmODE4RjdiMjc3QTQ0RjQwODgwMWIyMjE5RDMzNjEiLCJzdWIiOiIweDNkMjZCNmUyMjQ1ODU5NjY2YTAwNTkxOEViQzc2OGY4ZmU1OTU0YzQiLCJhdWQiOiJ0aGlyZHdlYi5jb20iLCJleHAiOjQ5MDM2OTcwOTUsIm5iZiI6MTc1MDA5NzA5NSwiaWF0IjoxNzUwMDk3MDk1LCJqdGkiOiJhY2NiZDg1NS01ZmJhLTQwZjUtYTIyNi1hM2EzZjIzY2YzYTkiLCJjdHgiOnsicGVybWlzc2lvbnMiOiJBRE1JTiJ9fQ.MHg3NzM1NThmM2Y4MGI4YTgxMDE3OWU1YWM2YzZhOTMyMDkzNzhhN2RlZWY3MzcwYzM2NWM2ZjM4MWU2MjZlYjkyMjQ0YTcwOTBjYzQwY2I1YzI0MGJmNGVlZGI1MjQ4ZDY0NzMyMTEwMDMzY2ZkMWFjNGFjM2FmYTY5ZGQzZTI2OTFi
ARG BACKEND_WALLET_ADDRESS=0x60FfddF41716c7E98818eCeb578Dc0a2b4acf96c
ARG SKIP_EXTERNAL_CONNECTIONS=true
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET

ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_DOCS_URL=$NEXT_PUBLIC_DOCS_URL
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV NEXT_PUBLIC_SURREALDB_CONNECTION=$NEXT_PUBLIC_SURREALDB_CONNECTION
ENV NEXT_PUBLIC_SURREALDB_USERNAME=$NEXT_PUBLIC_SURREALDB_USERNAME
ENV NEXT_PUBLIC_SURREALDB_PASSWORD=$NEXT_PUBLIC_SURREALDB_PASSWORD
ENV NEXT_PUBLIC_SURREALDB_DB=$NEXT_PUBLIC_SURREALDB_DB
ENV NEXT_PUBLIC_SURREALDB_NS=$NEXT_PUBLIC_SURREALDB_NS
ENV BACKEND_WALLET_ADDRESS=${BACKEND_WALLET_ADDRESS}
ENV ENGINE_URL=$ENGINE_URL
ENV ENGINE_SECRET_KEY=$ENGINE_SECRET_KEY
ENV SKIP_EXTERNAL_CONNECTIONS=$SKIP_EXTERNAL_CONNECTIONS
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET

# Build Next.js with debugging
RUN echo "Current directory contents:" && \
    ls -la && \
    echo "\nBuilding Next.js..." && \
    pnpm build && \
    echo "\nChecking .next directory:" && \
    ls -la .next && \
    echo "\nChecking .next/standalone:" && \
    ls -la .next/standalone || echo "Standalone directory not found" && \
    echo "\nChecking .next/static:" && \
    ls -la .next/static || echo "Static directory not found"

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./package.json

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV SKIP_EXTERNAL_CONNECTIONS=false

# Switch to non-root user
USER nextjs

# Expose the port
EXPOSE 3000

CMD ["node", "server.js"]
