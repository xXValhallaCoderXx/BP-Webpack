const yargs = require("yargs");
const setupNewPage = require("./new-page");

const appName = {
  describe: "The name of the app",
  demand: true,
  alias: "n"
};

const argv = yargs
  .command("new-app", "Creates a new App", {
    // Arguments the Command Requires
    appName
  })
  .help().argv;

var command = argv._[0];

switch (command) {
  case "new-app":
    setupNewPage(argv.appName, () => {
      console.log(`Creating new App: ${argv.appName}`);
    });
    break;
  default:
    console.log("No Command Given!");
}
