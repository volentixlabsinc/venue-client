# gatling-venue

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://choosealicense.com/licenses/mit/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)

> This is the gatling testing harness

This folder contains the code required to run the integration/stress tests for the venue-client.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Install

In order to run gatling, you will need to install the following:

  * Java 8+ JDK

Note that the above is true only if you use the `gradlew <cmd>` for commandline execution. The recommended commandline is `gradlew`

If you intend to run with just the `gradle <cmd>` on the commandline you will also need to install the following:

  * [Gradle 3.1+](https://gradle.org/)
  * [Scala 2.11.8](https://www.scala-lang.org/) Note that versions are very important in Scala.
  * [Gatling](https://gatling.io/)

## Usage

To run the tests:

*nix or Mac:
```
./gradlew gatlingRun
```

Windows:
```
gradlew.bat gatlingRun
```

## Maintainers

[@shawnlauzon](https://github.com/shawnlauzon)

## Contribute

See [CONTRIBUTING.md](https://github.com/Volentix/volentix/blob/master/CONTRIBUTING.md)

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 Volentix Labs Inc.
