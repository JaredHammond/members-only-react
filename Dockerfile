# syntax=docker/dockerfile:1

FROM node:lts

ENV NODE_ENV=production

ENV REACT_APP_API_URI="https://jaredhammond.dev/members-only/api"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"] .

RUN npm install --production

COPY . .

CMD ["npm", "start"]

EXPOSE 3000