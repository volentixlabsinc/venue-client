FROM node:8-alpine

WORKDIR /venue/

COPY package.json yarn.lock ./

RUN yarn install

# Keep the directory structure
COPY /assets ./assets
COPY /components ./components
COPY /layouts ./layouts
COPY /middleware ./middleware
COPY /pages ./pages
COPY /plugins ./plugins
COPY /static ./static
COPY /store ./store
COPY .babelrc nuxt.config.js ./

RUN yarn run build

CMD [ "yarn", "run", "start"]

ENV HOST 0.0.0.0

EXPOSE 3000
