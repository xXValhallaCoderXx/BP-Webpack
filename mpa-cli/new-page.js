const path = require("path");
const fs = require("fs-extra");

const setupNewPage = (name, callback) => {

  // Source path where to copy from
  const source = path.resolve(__dirname, "./page-template");

  // Make first char of string upper case
  upperFirst = string => string.charAt(0).toUpperCase() + string.slice(1);
  // Destination path to copy files
  const destination = path.resolve(__dirname, `../../src/${upperFirst(name)}`);
  // Copy from source to destination
  fs.copy(source, destination, err => {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
    console.log("Copy completed!");
  });
};

module.exports = setupNewPage;
