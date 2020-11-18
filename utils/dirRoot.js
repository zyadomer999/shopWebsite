const path = require("path");

module.exports = function dirRoot(...arg) {
  return path.join(path.dirname(require.main.filename), ...arg);
};
