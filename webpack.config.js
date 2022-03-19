// original file
const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/index.tsx",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    static: path.join(__dirname, "build"),
    open: true,
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.tsx$/,
      },
    ],
  },
};
