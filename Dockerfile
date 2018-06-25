FROM node:8-alpine

WORKDIR venue/

COPY venue/package.json venue/yarn.lock ./

RUN yarn install

COPY venue .

RUN yarn run build

CMD [ "yarn", "run", "start"]

ENV HOST 0.0.0.0

EXPOSE 3000
