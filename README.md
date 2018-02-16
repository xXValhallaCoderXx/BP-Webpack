# Front-End Build Configuration

This is a basic boilerplate for React JS to provide a development enviroment for creating SPA applications,
It provides extra features baked in to aid development.

This development enviroment also makes use of babel, to allow for users to use the latest JS trends in their code.

## Features

- Hot Module Reloading: HMR Will allow application to keep current state, when making changes to your code
- SASS Ready: Sass is ready to be used straight out the box
- CSS Modules Ready: Users can use SASS/CSS Modules without setup
- CSS is Extracted into a single .css style sheet in production
- Image optimization on production
- NEED TO WRITE MORE...

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Ensure you to have the latest Node LTS ensured globally on your system, you can download it from [HERE](https://nodejs.org/en/).

### Installing

1. Clone this repo using `git clone`.
2. Move to the appropriate directory.
3. Run `npm -i` or `yarn` in order to install dependencies.<br />

## Development

1. Run `npm start` or `yarn start` to start the development enviroment<br />
2. Go to browser and visit: `localhost:8080`.

This will start up a webpack dev server to allow for local development of your application.

### CLI Scripts
The development enviroment has various commands in the `package.json` which we are able to run via the CLI, which are as follows:

```
  "lint:fix-js": This will run prettier and auto-format any code which may not be formatted correctly.
  "lint:js": This will provide feedback via the CLI if there are currently any linting errors.
  "start": This will start the development server on localhost:8080 by default.
  "start:lint": This will start the development server, with linter so if any code if formatted incorrectly errors will be dislayed via CLI and project wont compile.
  "stats": Provides a .json file of the build output, can be used with other applications for analyzing the output
  "build": Builds the application

```



