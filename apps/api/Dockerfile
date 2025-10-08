# apps/api/Dockerfile
FROM node:18-alpine AS base

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY apps/api/package.json ./apps/api/

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY apps/api ./apps/api

# Build
WORKDIR /app/apps/api
RUN pnpm build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built files
COPY --from=base /app/apps/api/dist ./dist
COPY --from=base /app/apps/api/dist/package.json ./

# Install production dependencies
RUN npm install --production

EXPOSE 5000

CMD ["node", "dist/server.js"]
