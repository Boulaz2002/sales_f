# ---- Build Stage ----
    FROM node:22.14.0-alpine AS builder

    WORKDIR /app
    
    # Install dependencies
    COPY package.json package-lock.json ./
    RUN npm install --frozen-lockfile
    
    # Copy source files
    COPY . .
    
    # Build Next.js app
    RUN npm run build
    
    # ---- Production Stage ----
    FROM node:22.14.0-alpine AS runner
    
    WORKDIR /app
    
    # Copy only the required production files
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/package.json ./
    COPY --from=builder /app/node_modules ./node_modules 
    
    # Set environment variable for production
    ENV NODE_ENV=production
    
    # Expose port for Next.js server
    EXPOSE 3000
    
    # Start Next.js in production mode
    CMD ["npx", "next", "start"]
    