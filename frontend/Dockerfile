# Stage 1: Build
FROM node:18-alpine as builder
WORKDIR /app
COPY frontend/package.json .
RUN npm install --include=dev
RUN npm install @emotion/styled @emotion/react
COPY frontend/public ./public
COPY frontend/src ./src
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
