FROM node:8-alpine

WORKDIR venue/

ARG BASE_URL=http://localhost/api

ENV BASE_URL=$BASE_URL

ARG BROWSER_BASED_URL=http://localhost/api

ENV BROWSER_BASED_URL=$BROWSER_BASED_URL

COPY venue/package.json venue/package-lock.json ./

RUN yarn install

COPY venue .

RUN yarn run build

CMD [ "yarn", "run", "start"]

ENV HOST 0.0.0.0

EXPOSE 3000
