FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app

# Clone once at build time so git history/remote metadata is available at runtime
RUN git clone https://github.com/jaameypr/aethera-home .

EXPOSE 3000

# At runtime: hard-reset to latest on current branch, install, build, serve
CMD sh -c ' \
  echo "→ Fetching latest..." && \
  git fetch origin && \
  git reset --hard "origin/$(git rev-parse --abbrev-ref HEAD)" && \
  echo "→ Installing dependencies..." && \
  npm ci && \
  echo "→ Building..." && \
  npm run build && \
  echo "→ Starting..." && \
  exec npm start \
'
