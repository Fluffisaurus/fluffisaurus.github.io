const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== "production";
const devCacheTTL = 1200000; // 20 min = 20min * 60s/min * 1000ms/s
const prodCacheTTL = 7776000000; // 3 month = 3months * 30days * 24h/day * 60min/h * 60s/min * 1000ms/s

module.exports = {
  mode: devMode ? "development" : "production",
  devtool: devMode ? "inline-source-map" : false,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: devMode ? "/" : "./",
    filename: devMode ? "[name].js" : "[name].[contenthash].js",
  },
  cache: {
    type: "filesystem",
    maxAge: devMode ? devCacheTTL : prodCacheTTL,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", "..."],
    alias: {
      "@blur-ui": path.resolve(__dirname, "./node_modules/@blur-ui"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: devMode ? "[ic].css" : "[ic].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      // favicon: 'public/favicon.ico'
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      analyzerMode: devMode ? "server" : "json",
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
    chunkIds: devMode ? "named" : "deterministic",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // https://stackoverflow.com/a/65860864
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
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
