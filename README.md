[![Build Status](https://travis-ci.org/troyblank/jest-base.svg?branch=master)](https://travis-ci.org/troyblank/jest-base)
[![Coverage Status](https://coveralls.io/repos/github/troyblank/jest-base/badge.svg?branch=master)](https://coveralls.io/github/troyblank/jest-base?branch=master)

# Jest Base

A good start for jest unit testing. Can be used as an example or for it's helpers and dependencies.

## Setup
You will want to install all required node packages:

    npm install

### Run Example Tests

    npm test

## Use with React

In order to get this base working with `React` you will need to include the `testSetup/react.js` file in this repo and add it to your `jest.config.js` under `setupFilesAfterEnv`.