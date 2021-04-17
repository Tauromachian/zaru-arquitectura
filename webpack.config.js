const path = require("path");

module.exports = {
  entry: "./resources/index.js",
  output: {
    path: path.join(__dirname, "/public/dist"),
    publicPath: "/public/dist",
    filename: "main.js"
  },
  mode: "production",
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
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/fonts/'
            }
          }
        ]
      }
    ]
  }
};
