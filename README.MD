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

## Todo
- Dynamically Sort Chunks
- Try concat method of pafges

