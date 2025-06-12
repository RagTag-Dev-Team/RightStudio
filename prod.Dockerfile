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

# Copy package files first to leverage Docker cache
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN pnpm install --frozen-lockfile

# Copy source files
COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .
COPY postcss.config.mjs .
COPY tailwind.config.ts .
COPY src/prisma ./src/prisma/
COPY .env .

# Set build-time environment variables with defaults
ARG NEXT_PUBLIC_APP_URL=http://localhost:3000
ARG NEXT_PUBLIC_DOCS_URL=http://localhost:3001
ARG NEXTAUTH_URL=http://localhost:3000/api/auth
ARG NEXTAUTH_SECRET=4gGjs8xEUbYTpbK9CzBZjKVGsSNlyXohMx7U7D2ItZA
ARG NEXT_PUBLIC_SURREALDB_CONNECTION=http://surrealdb:8000/rpc
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

# Build Next.js with verification
RUN pnpm build && \
    echo "Checking build output..." && \
    ls -la .next && \
    if [ ! -d ".next/standalone" ]; then \
        echo "Error: .next/standalone directory not found. Contents of .next directory:" && \
        find .next -type d && \
        echo "Checking next.config.mjs:" && \
        cat next.config.mjs && \
        echo "Checking package.json:" && \
        cat package.json && \
        echo "Checking node_modules:" && \
        ls -la node_modules/.bin && \
        exit 1; \
    fi

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
