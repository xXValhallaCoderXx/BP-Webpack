# React JS + Webpack Build Config

## Features

- WIP

### Prerequisites

- Ensure you to have the latest Node LTS ensured globally on your system, you can download it from [HERE](https://nodejs.org/en/).
- We suggest you use `yarn` though feel free to use `npm`

### Installing

1. Clone this repo using `git clone`.
2. Move to the appropriate directory.
3. Run `npm -i` or `yarn` in order to install dependencies.<br />

## Development

1. Run `yarn start --env.app NAME_OF_APPLICATION` to start the development enviroment<br />
2. The `NAME_OF_APPLICATION` will be the folder name of an application you have in `src` folder.

```
/src
    /dashboard
    /settings
    /shared
```
3. To run the `dashboard` app would required you to type: `yarn start --env.app dashboard`
4. This will start up a webpack dev server on `localhost:8080`

## Enviroment Variables
In side of `config/env-vars.json` you can place keys for specific dev / production enviroments, in the following format.

```
{
  "prod": {
    "ENV_VAR": "PROD",
    "TEST": "PROD2"
  },
  "stage": {
    "ENV_VAR": "STAGE",
    "TEST": "STAGE2"
  },
  "dev": {
    "ENV_VAR": "DEV",
    "TEST": "DEV2"
  }
}
```
1. Enter a `key value` pair in either of the 3 enviroments `dev, stage, prod`.
2. It will be accessible on `process.env.MY_VAR` or directly as `MY_VAR` within the application

## Todo
- Dynamically Sort Chunks
- Clean up CLI
- Clean up loose ends

