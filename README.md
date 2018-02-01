This is a production ready development and build enviroment for a React + Redux + React Router JS web application, built on webpack and babel.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

#### Prerequisites

Ensure you to have the latest Node LTS ensured globally on your system, you can download it from [HERE](https://nodejs.org/en/).

### Installing

1. Clone this repo using `git clone https://github.com/xXValhallaCoderXx/Webpack-V3-React-HMR.git`.
2. Move to the appropriate directory.
3. Run `npm -i` or `yarn` in order to install dependencies.<br />
4. Run `npm start` or `yarn start` to start the development enviroment<br />
5. Go to browser and visit: `localhost:8080`.

# CLI Commands

Bellow are the current CLI commands availible in the config:

```
  "lint:fix-js": Automatically fix JS code to formatting rules,
  "lint:js": Run the JS linter for feedback,
  "start": Run the development enviroment,
  "start:lint": Run development enviroment with linting,
  "stats": Get stats on the webpack build for reports,
  "build": Run script to build and compile the project for production,
  "build:testing": Run script to build and compile the project for testing
```

## Core Features

<dl>
  <dt>Multiple enviroment configuration</dt>
  <dd>Different enviroment for depening on use case: development, staging, production</dd>

  <dt>Babel transpiler</dt>
  <dd>Use all the shiny new things</dd>

  <dt>CSS Modules + SASS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity, parses the CSS on production to add vendor prefixes </dd>

  <dt>Prettier code formatting and linting</dt>
  <dd>IDE linting with Prettier to allow enforces a consistent style , parsing through the code and checks its format is aligned with Prettiers own rules.</dd>

  <dt>Git Hooks</dt>
  <dd>No more style nit-picking at code review :)), Git hooks are implemented such as "pre-push" to run tests before pushing to the repo, if any test fail the project will not be pushed to the repository. Also makes use of "pre-commit" to run "lint-staged" to ensure that prettier formatter only checks files which are in staging, to speed up formatting in large projects.</dd>

</dl>


### Development Features

<dl>
  <dt>Hot Module Reloading</dt>
  <dd>Saved changes to the CSS and JS are reflected instantaneously without refreshing the page, while preserving application state.  </dd>
</dl>

### Production Features

<dl>
  <dt>CSS Autoprefixing</dt>
  <dd>Parses CSS on build mode, and will automatically add any vendor-prefixes to the production css file.</dd>

  <dt>Various optimizations</dt>
  <dd>JS is transpiled for targetting browsers, CSS and JS files minified, Image optimization, Code / Bundle splitting, Lazy loading of files, file version hashing.</dd>

</dl>

# Usage

## Development Enviroment
```
yarn start
```

## Deployment Enviroment

### Testing
This enviroment will enable us to test a near production version on testing, though source maps will be added to deployment to allow for simpler debugging.
Additional configuations can be added here, such as disabling certain features (captchas etc) for when using things such as browser tests.

```
yarn build:testing
```

### Production
This enviroment is the release enviroment for the application, and is suitable to be tested on staging, and released on production.

```
yarn build
```

# Tests

Unit-tests are created with Jest and Enzyme,
Snapshots are also made use of to allow for quicker coverage and a simple way of monitoring changes to components.

## Running Tests

To run Unit tests via the CLI command use the following command: 

```
yarn jest or npm run jest
```

If the unit testing has failed to snapshots being updated, run the following command: 

```
yarn jest:snapshot or npm run jest:snapshot
```