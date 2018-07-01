const path = require("path");
const parts = require("./webpack.parts");
const { parseAppPath } = require("./page-parser");
const pageJSON = require("./page-config.json");

let pages = [];

parseAppPath(pageJSON).map(app_name => {
  pages.push(
    parts.page({
      title: `Horangi - ${app_name[0].toUpperCase() + app_name.slice(1)}`,
      // favicon: path.resolve(
      //   __dirname,
      //   `../../../storyfier-app/shared/assets/images/favicon.png`
      // ),
      template: path.resolve(
        __dirname,
        `../../../src/${app_name}/index.html`
      ),
      path: app_name,
      // chunks: [
      //   `${app_name}`,
      //   "manifest",
      //   "vendor-core-1",
      //   "vendor-core-2",
      //   "vendor-core-3",
      //   "horangi_lib",
      //   "storyfier-lib",
      //   "auth-lib"
      // ],
      entry: {
        [`${app_name}`]: path.resolve(__dirname, `../../../src/${app_name}`)
      }
    })
  );
});

module.exports = pages;