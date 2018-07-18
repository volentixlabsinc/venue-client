# venue-client

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![MIT](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> The client side for the Venue rewards and bounty tracker platform.

This repository houses the artifacts for the UI of the Venue platform. The main technologies used for this software are:

  * [Nuxt](https://nuxtjs.org/)
  * [Vue](https://vuejs.org/)
  * [Node](https://nodejs.org/)

For deployment, we are using:

  * [Docker](https://www.docker.com/)
  * [CircleCi](https://circleci.com/)
  * [Kubernetes](https://kubernetes.io/)

## Table of Contents

- [Background](#background)
- [Install](#install)
  - [Requirements](#requirements)
  - [Venue Client](#venue-client)
- [Usage](#usage)
  - [Running](#running)
  - [Building](#building)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Background

DO WE NEED THIS SECTION?????????????????????????????????????????

## Install

### Requirements

Before running Venue, make sure you have the following installed on your machine.

  * [Venue Server](https://github.com/volentix/venue-server).
  * [Yarn](https://yarnpkg.com/lang/en/)
  * [Node and NPM](https://nodejs.org/)

### Venue Client

Open a terminal in the root of this project and then change into the 'venue' directory:

```
cd venue
```

Note that some versions of NPM break the build, as a result, yarn is recommended instead.

Install dependancies.
```
yarn install
```

## Usage

When running locally, the application is available here: http://localhost:3000

Once the project is installed, the following commands are used to run/build the project.


### Running
Serve with hot reload at localhost:3000
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

To generate the project:
```
yarn run generate
```

## Maintainers

[@shawnlauzon](https://github.com/shawnlauzon)

## Contribute

See [the contribute file](contribute.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 Volentix Labs Inc
