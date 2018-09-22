const path = require("path");
const parts = require("../webpack.parts");
// const { parseAppPath } = require("./page-parser");
// const pageJSON = require("./page-config.json");

let pages = [];
// parseAppPath(pageJSON)
["app1", "app2", "app3"].map(name => {
  pages.push(
    parts.page({
      title: `MPA - ${name[0].toUpperCase() + name.slice(1)}`,
      template: path.resolve(
        __dirname,
        `../../mpa-app/${name}/index.html`
      ),
      path: name,
      entry: {
        [`${name}`]: path.resolve(__dirname, `../../mpa-app/${name}`)
      }
    })
  );
});

module.exports = pages;