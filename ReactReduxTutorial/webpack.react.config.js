const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
      "react": "./index.js"
  },
  output: {
    pathinfo: true,
    path: path.join(__dirname, "wwwroot", "js"),
    filename: "[name].js"
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        use: [
          {
            loader: require.resolve("eslint-loader"),
            options: {
              eslintPath: require.resolve("eslint")
            }
          }
        ],
      },
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\.less$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: { modules: true, localIdentName: "[local]-[hash:base64:4]" }
              },
              {
                loader: "less-loader"
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  externals: {},
  stats: {
    colors: true
  },
  devtool: "source-map",
  context: path.resolve(__dirname, "react"),
  resolve: {
    modules: [path.resolve("./js"), "node_modules"]
  },
  performance: {
    hints: false
  }
};
