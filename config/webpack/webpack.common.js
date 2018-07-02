const merge = require("webpack-merge");
const parts = require("./utils/webpack.parts");
const webpack = require("webpack");

//const envVars = require("./utils/env-vars");

// const env = "dev";
// let config = require("../env-vars.json");
// //console.log("PROCESS: ", process.env.NODE_ENV)
// //envConfig = dev | stage | prod

// // WORKING ON ENV VARIBL ELOADING FROM JSON

// let envConfig = config[env];
// let dataObject = []
// console.log("ENV CONFIG: ", envConfig);


// console.log("LALALAL: ", dataObject)

// Object.keys(envConfig).forEach(key => {
   
//   parts.setFreeVariable(key, envConfig[key]),
// });
const commonConfig = merge([
  {
    plugins: [new webpack.NamedModulesPlugin()]
  },
  // Object.keys(envConfig).forEach(key => {
  //     console.log("WHAT IS THIS : ", envConfig[key])
  //   //parts.setFreeVariable(key, envConfig[key]),
  // });
  
]);

module.exports = commonConfig;
