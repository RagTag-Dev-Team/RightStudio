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
ARG NEXT_PUBLIC_APP_URL=http://localhost:3000
ARG NEXT_PUBLIC_DOCS_URL=http://localhost:3001
ARG NEXTAUTH_URL=http://localhost:3000/api/auth
ARG NEXTAUTH_SECRET=4gGjs8xEUbYTpbK9CzBZjKVGsSNlyXohMx7U7D2ItZA
ARG NEXT_PUBLIC_SURREALDB_CONNECTION=ws://surrealdb:8000
ARG NEXT_PUBLIC_SURREALDB_USERNAME=rgtg_admin
ARG NEXT_PUBLIC_SURREALDB_PASSWORD=bWFubnk6c0FzMyp6MnAh
ARG NEXT_PUBLIC_SURREALDB_DB=rgtg
ARG NEXT_PUBLIC_SURREALDB_NS=rgtg
ARG ENGINE_URL=https://thirdwebengine:3005
ARG ENGINE_SECRET_KEY=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweGM1ZDFiNjMwNTk2NkM5YzQyNjExZWQ0MTY4OTFFYmZmYTI5MzNiQjgiLCJzdWIiOiIweDNkMjZCNmUyMjQ1ODU5NjY2YTAwNTkxOEViQzc2OGY4ZmU1OTU0YzQiLCJhdWQiOiJ0aGlyZHdlYi5jb20iLCJleHAiOjQ5MDIxNzU0NTcsIm5iZiI6MTc0ODU3NTQ1NywiaWF0IjoxNzQ4NTc1NDU3LCJqdGkiOiJmY2Q2YzI2Yy05NTAwLTQ4NjMtYmUyZC1hMDA5MjAyODBhNTgiLCJjdHgiOnsicGVybWlzc2lvbnMiOiJBRE1JTiJ9fQ.MHgxNjhiYWE0YzkxOTU5Yjg4ZTI1OGE3OWM1MTY2NGU3NjIyMjBlZWRhMzFjODVlMmZjNWQzZWIwNDk0NmI5MWFjNjdiNDgwNDM2MjhjNzBkNGJkZTU3N2QzZjA4NDY1MzdmZTFiMTNhMGQ2ZTM1Yzk3YjY5M2JiNjYxY2IzYjMyODFj
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
ENV ENGINE_URL=$ENGINE_URL
ENV ENGINE_SECRET_KEY=$ENGINE_SECRET_KEY
ENV SKIP_EXTERNAL_CONNECTIONS=$SKIP_EXTERNAL_CONNECTIONS
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET

# Build the application
RUN pnpm build

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Install pnpm in the runner stage
RUN npm install -g pnpm

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Create directory for certificates
RUN mkdir -p /app/surrealdb/certs

# Set the correct permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the port
EXPOSE 3000

# Set environment variables
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

# Start the application using pnpm
CMD ["pnpm", "start"]
