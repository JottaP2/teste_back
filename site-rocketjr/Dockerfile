# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm install

# Build Next.js application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy prisma schema
COPY prisma ./prisma

# Copy built application from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Copy scripts for initialization
COPY scripts ./scripts

# Create data directory for SQLite
RUN mkdir -p ./prisma

# Copy entrypoint script
COPY entrypoint.sh ./
RUN chmod +x ./entrypoint.sh

# Copy .env for build time (optional, will be overridden at runtime)
COPY .env* ./

# Ensure database file path exists
RUN mkdir -p ./prisma

# Expose port
EXPOSE 3000

# Start application with entrypoint
ENTRYPOINT ["./entrypoint.sh"]
