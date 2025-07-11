# Stage 1: Backend
FROM node:18-alpine as backend
WORKDIR /app
COPY backend/package.json ./
COPY backend/package-lock.json ./
RUN npm ci
COPY backend .

# Stage 2: Frontend static files
FROM nginx:alpine as frontend
COPY frontend /frontend

# Stage 3: Final app image
FROM node:18-alpine
WORKDIR /app
COPY --from=backend /app /app
COPY --from=frontend /frontend /app/public

EXPOSE 3000
CMD ["node", "app.js"]
