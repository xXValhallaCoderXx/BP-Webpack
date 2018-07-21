const env = process.env.NODE_ENV;
let config = require("../../../env-vars.json");
// envConfig = dev | stage | prod

let envConfig = config[env];
// Depending on the enviroment, this will pull the values from the respective .json file and add the values as process.env variables
switch (env) {
  case "dev":
    Object.keys(envConfig).forEach(key => {
      //process.env[key] = envConfig[key];
      console.log("ENV KEY: ", envConfig[key]);
      console.log("ENV KEY: ", env[key]);
    });
    break;
  case "stage":
    Object.keys(envConfig).forEach(key => {
      //process.env[key] = envConfig[key];
      console.log("ENV KEY: ", envConfig[key]);
      console.log("ENV KEY: ", env[key]);
    });
    break;
  case "prod":
    Object.keys(envConfig).forEach(key => {
      //process.env[key] = envConfig[key];
      console.log("ENV KEY: ", envConfig[key]);
      console.log("ENV KEY: ", env[key]);
    });
    break;
  default:
    Object.keys(envConfig).forEach(key => {
      //process.env[key] = envConfig[key];
      console.log("ENV KEY: ", envConfig[key]);
      console.log("ENV KEY: ", env[key]);
    });
}
