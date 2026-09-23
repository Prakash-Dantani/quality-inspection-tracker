# ---------- Stage 1 : Builder ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# ---------- Stage 2 : Runtime ----------
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/src ./src

EXPOSE 8080

CMD ["npm", "start"]