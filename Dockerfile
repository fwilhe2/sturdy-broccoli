FROM node:14-slim

COPY dist/* .

ENTRYPOINT ["node", "/index.js"]