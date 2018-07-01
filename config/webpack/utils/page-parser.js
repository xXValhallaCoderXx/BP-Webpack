const parseAppPath = (data) => {
  let appNames = [];
  Object.keys(data).map(function(key, index) {
    appNames.push(data[key].name)
 });
  return appNames;
};

module.exports = {
  parseAppPath
}