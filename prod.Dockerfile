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
COPY .env .


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

# Build Next.js
RUN pnpm build

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

# Create .next directory if it doesn't exist
RUN mkdir -p .next

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV SKIP_EXTERNAL_CONNECTIONS=false

# Switch to non-root user
USER nextjs

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
