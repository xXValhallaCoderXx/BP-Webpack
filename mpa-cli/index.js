const yargs = require("yargs");

const setupNewPage = require("./new-page");

const pageName = {
  describe: "The name of the Page",
  demand: true,
  alias: "n"
};

const argv = yargs
  .command("new-page", "Creates a new SCC Page", {
    // Arguments the Command Requires
    pageName
  })
  .help().argv;

var command = argv._[0];

switch (command) {
  case "new-page":
  setupNewPage(argv.pageName, () => {
      console.log(`Creating new Page: ${argv.pageName}`);
    });
    break;
  default:
    console.log("No Command Given!");
}