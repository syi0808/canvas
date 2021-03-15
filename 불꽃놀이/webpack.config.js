const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties",
              ],
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  entry: {
    main: "./index.js",
  },
  mode: "development",
};
