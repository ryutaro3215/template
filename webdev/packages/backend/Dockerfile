FROM oven/bun:latest AS backend-builder

WORKDIR /app

COPY package.json bun.lock* ./

COPY packages/backend/package.json  ./packages/backend/package.json
COPY packages/frontend/package.json ./packages/frontend/package.json

RUN bun install --frozen-lockfile

COPY ./ ./

WORKDIR /app/packages/backend
RUN bun run build

FROM oven/bun:latest AS backend-production

WORKDIR /app
ENV NODE_ENV=production

COPY --from=backend-builder /app/packages/backend/dist ./dist

EXPOSE 3000

CMD ["bun", "dist/index.js"]

