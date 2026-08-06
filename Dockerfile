FROM node:22-alpine AS deps

WORKDIR /app

RUN apk add --no-cache libc6-compat
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack enable
RUN pnpm install --frozen-lockfile

FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable
RUN pnpm build

FROM node:22-alpine AS runner

WORKDIR /app
RUN corepack enable

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

CMD ["pnpm", "start"]
