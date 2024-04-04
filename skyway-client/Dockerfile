# FROM node:18-alpine as builder

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:alpine

# COPY --from=builder /app/dist /usr/share/nginx/html


# ENV PORT = 5173

# EXPOSE 80

FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV PORT = 5173

CMD ["npm","run","dev"]