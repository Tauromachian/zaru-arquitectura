const path = require("path");

module.exports = {
  entry : "./public/javascripts/src/app.js",
  output: {
    path: path.join(__dirname, "/public/dist"),
    publicPath: "/public/dist",
    filename: "main.js",
  },
  mode: "development"
}