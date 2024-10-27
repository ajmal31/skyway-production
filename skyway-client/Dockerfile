# FROM node:18-alpine as builder

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . .

# RUN REACT_APP_PORT=5173 npm run build

# FROM nginx:alpine

# COPY --from=builder /app/dist /usr/share/nginx/html

# EXPOSE 80

FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# Use a lightweight server for the production image
FROM nginx:stable-alpine

# Copy the build output from the previous stage to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the desired port
EXPOSE 80