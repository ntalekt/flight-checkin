FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
COPY src ./src
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
