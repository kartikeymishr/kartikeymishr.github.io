FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps || npm install
COPY public/ public/
COPY src/ src/

ARG REACT_APP_SANITY_PROJECT_ID
ARG REACT_APP_SANITY_TOKEN
RUN npm run build

FROM nginx:alpine AS runner

COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
