# React + Redux Web Application Boilerplate

This is a full boilerplate for a web application which is production ready, providing various different enviroments for development and build, using technologies such as React JS, Redux, React-Router to create a fully optimized SPA.

#### Prerequisites

Ensure you to have the latest Node LTS installed globally on your system, you can download it from [HERE](https://nodejs.org/en/). Its currently v8+ as of this time.

### Installing

1. Clone this repo using `git clone https://github.com/xXValhallaCoderXx/Webpack-V3-React-HMR.git`.
2. Move to the appropriate directory.
3. `npm -i` or `yarn` in order to install dependencies.<br />
4. `npm start` or `yarn start` to start the development enviroment<br />
5. Open browser and visit: `localhost:8080`.

# CLI Commands

The different CLI commands below describe some of the scripts that are currently available:
- Just run them as you would a normal `npm` or `yarn` command such as: `yarn test:run` for unit tests to be run.

```
  "lint:fix-js": Automatically fix JS code to formatting rules,
  "lint:js": Run the JS linter for feedback,
  "start": Run the development enviroment,
  "start:lint": Run development enviroment with linting,
  "stats": Get stats on the webpack build for reports,
  "build": Run script to build and compile the project for production,
  "build:testing": Run script to build and compile the project for testing
  "test:run": Run the unit tests
  "test:coverage": Provide unit test coverage
  "test:watch": Run test runner in the background
  "test:update": Update the jest snapshots
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

## Development
```
yarn start
```

## Deployment

### Testing Enviroment
This enviroment will enable us to test a near production version on testing, though source maps will be added to deployment to allow for simpler debugging.
Additional configuations can be added here, such as disabling certain features (captchas etc) for when using things such as browser tests.

```
yarn build:testing
```

### Production Enviroment
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
