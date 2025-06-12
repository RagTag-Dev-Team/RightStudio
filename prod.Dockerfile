# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine AS base

# Install common dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    openssl \
    curl \
    tini

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files first to leverage Docker cache
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

# Install dependencies
RUN if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; \
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
    fi

# Copy source files
COPY src/prisma ./src/prisma/
COPY src/assets ./src/assets/
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

# Build Next.js with proper error handling
RUN if [ -f yarn.lock ]; then yarn build || (echo "Build failed" && exit 1); \
    elif [ -f package-lock.json ]; then npm run build || (echo "Build failed" && exit 1); \
    elif [ -f pnpm-lock.yaml ]; then pnpm build || (echo "Build failed" && exit 1); \
    else npm run build || (echo "Build failed" && exit 1); \
    fi

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Install production dependencies only
RUN apk add --no-cache curl

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_EXTERNAL_CONNECTIONS=false

# Set the correct permissions for all directories and files
RUN chown -R nextjs:nodejs /app && \
    chmod -R 777 /app && \
    chmod -R 777 /app/.next && \
    chmod -R 777 /app/node_modules && \
    chmod -R 777 /app/public

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/api/health || exit 1

# Expose the port
EXPOSE 3000

USER nextjs

# Use tini as init system
ENTRYPOINT ["/sbin/tini", "--"]

# Start the application with host binding and proper logging
CMD ["node", "server.js"]
