const path = require("path");

module.exports = {
  entry: "./resources/index.js",
  output: {
    path: path.join(__dirname, "/public/dist"),
    publicPath: "/public/dist",
    filename: "main.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
