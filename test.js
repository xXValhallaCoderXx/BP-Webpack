const path = require("path");
const fileStream = require("fs");
const file = require(path.resolve("./config/webpack/utils/page-config.json"))

console.log("WHAT IS FILE : ", file);

file["app4"] = {
  name: "TEST"
}

var json = JSON.stringify(file);
fileStream.writeFile(
  path.resolve(__dirname, "./config/webpack/utils/page-config.json"),
  json,
  "utf8",
  callback
);
function callback() {
  console.log(`Copy completed! Added!`);
}
