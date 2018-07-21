# venue-client

[![CircleCI](https://circleci.com/gh/Volentix/venue-client.svg?style=shield&circle-token=476a91629295ad83bd8b0c90a1dbc2712803b5d5)](https://circleci.com/gh/Volentix/venue-client)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://choosealicense.com/licenses/mit/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)

> The webapp for the Venue, a community engagement platform for the Volentix community    

This repository houses the artifacts for the UI of the Venue platform. The main technologies used for this software are:

  * [Javascript](https://www.javascript.com/)
  * [Vue](https://vuejs.org/)
  * [Nuxt](https://nuxtjs.org/)
  * [Bulma](https://bulma.io)

For deployment, we are using:

  * [Docker](https://www.docker.com/)
  * [CircleCi](https://circleci.com/)
  * [Kubernetes](https://kubernetes.io/)

## Table of Contents

- [Install](#install)
  - [Requirements](#requirements)
  - [Venue Client](#venue-client)
- [Usage](#usage)
  - [Running](#running)
  - [Building](#building)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Install

### Requirements

Before running the Venue client, make sure you have the following installed on your machine.

  * [Venue Server](https://github.com/volentix/venue-server).
  * [Yarn](https://yarnpkg.com/lang/en/) or [NPM](https://www.npmjs.com) (we recommend yarn)
  * [Node](https://nodejs.org/)

### Venue Client

Open a terminal in the root of this project and then change into the 'venue' directory:

```
cd venue
```

Install dependancies.
```
yarn install
```

## Usage

When running locally, the application is available here: http://localhost:3000

Once the project is installed, the following commands are used to run/build the project.

## Proxy

In order for the client to communicate without the need for CORS, you must first run the nginx reverse proxy. Note that the files to create the nginx proxy can be found in this repository [here](/nginx/README.md).

The result of running this proxy is that all the traffic will be sent through localhost. As a result, you can reach the venue server with http://localhost/api or the client with http://localhost.

To run the nginx proxy:
```
docker run -p 80:80 --net="host" volentixlabs/venue-local-proxy:v0.1.0
```

or if you are on a Mac:
```
docker run -p 80:80 volentixlabs/venue-local-proxy-mac:v0.1.0
```

### Running
Serve with hot reload at http://localhost
```
npm run dev
```
Start the server:
```
npm start
```

### Building

Build for production and launch server
```
yarn run build
```

## Maintainers

[@shawnlauzon](https://github.com/shawnlauzon)

## Contribute

Venue is a project which was originally created by Volentix Labs, but is owned and
maintained by the Volentix community. We actively support and appreciate anyone
who wants to improve this or any project within the community.

See [CONTRIBUTING.md](https://www.github.com/Volentix/venue/CONTRIBUTING.md)

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 Volentix Labs Inc
