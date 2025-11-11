FROM oven/bun:latest AS frontend-builder

WORKDIR /app

COPY package.json bun.lock* ./

COPY packages/frontend/package.json ./packages/frontend/package.json
COPY packages/backend/package.json  ./packages/backend/package.json

RUN bun install --frozen-lockfile

COPY ./ ./

WORKDIR /app/packages/frontend
RUN bun run build


FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY packages/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-builder /app/packages/frontend/dist /usr/share/nginx/html

EXPOSE 5173 

CMD ["nginx", "-g", "daemon off;"]

