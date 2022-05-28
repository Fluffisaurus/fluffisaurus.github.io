const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: devMode === "production" ? "./" : "/",
    filename: devMode ? "[name].js" : "[name].[hash].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[ic].css" : "[ic].[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      // favicon: 'public/favicon.ico'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: !devMode,
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
    allowedHosts: "auto",
    hot: true,
    liveReload: true,
    watchFiles: ["src/**/*", "public/**/*"],
  },
};
