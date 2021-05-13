const path = require("path");
const webpack = require("webpack");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    session: "./src/session/index.js",
    bodyNav: "./src/bodyNav/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    //historyApiFallback: true,
    hot: true,
    https: false,
    //noInfo: true,
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
    new webpack.DefinePlugin({
      "process.env": "{}",
      global: {},
    }),
  ],
};
