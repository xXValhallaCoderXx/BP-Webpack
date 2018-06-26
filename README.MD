# React JS + Webpack Build Config

DESCRIPTION
## Features

- **Hot Module Reloading**: HMR Ready - Keep application state while making live changes to your code!

## Getting Started

Getting started is simple! The directions below will get you up and running to get hacking in no time!

### Prerequisites

Ensure you to have the latest Node LTS ensured globally on your system, you can download it from [HERE](https://nodejs.org/en/).

### Installing

1. Clone this repo using `git clone`.
2. Move to the appropriate directory.
3. Run `npm -i` or `yarn` in order to install dependencies.<br />

## Development

1. Run `npm start` or `yarn start --env.application app1` to start the development enviroment<br />
2. Go to browser and visit: `localhost:8080`.

This will start up a webpack dev server to allow for local development of your application.

### CLI Scripts
The development enviroment has various commands in the `package.json` which we are able to run via the CLI, which are as follows:

- `lint:fix-js` - Runs prettier will auto-format any code which may not be formatted correctly.
- `lint:js`: This will provide feedback via the CLI if there are currently any linting errors.
- `start`: Starts the development server on localhost:8080 by default.
- `start:lint`: Starts the development server, with linter, any code formatted incorrectly results in errors dislayed via CLI.
- `stats`: Provides a .json file of the build output, can be used with other applications for analyzing the output
- `build`: Builds the application into a bundle and prepare for deployment.

## Deployment
The build script will run several optimizations and preapre a single `.html` file which will link to the static files (`.js` and `.css`) as an application that will be ready to be served via a server.

1. Run `yarn build` or `npm run build`
2 Files will output in the `build` directory

