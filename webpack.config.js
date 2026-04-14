const path = require("path");
const glob = require("glob");

// webpack plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

// optimization plugins
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

// vars
const devMode = process.env.NODE_ENV !== "production";
const isProduction = process.env.NODE_ENV === "production";
const devCacheTTL = 1200000; // 20 min = 20min * 60s/min * 1000ms/s
const prodCacheTTL = 7776000000; // 3 month = 3months * 30days * 24h/day * 60min/h * 60s/min * 1000ms/s

const paths = [
  "/about/",
  "/projects/",
  "/projects/personal/",
  "/projects/academic/",
  "/contact/",
  "/resume/",
];
const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = {
  mode: devMode ? "development" : "production",
  devtool: devMode ? "inline-source-map" : false,
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: "/",
  },
  cache: {
    type: "filesystem",
    maxAge: devMode ? devCacheTTL : prodCacheTTL,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", "..."],
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@main": path.resolve(__dirname, "./src"),
      "@blur-ui": path.resolve(__dirname, "./node_modules/@blur-ui"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: () => glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      safelist: {
        deep: [/^yarl__/], // yet-another-react-lightbox class name prefix
      },
      rejected: true,
    }),
    new HtmlBundlerPlugin({
      entry: [
        {
          import: "public/index.html",
          filename: "index.html",
        },
      ],
      js: {
        filename: devMode ? "js/[name].js" : "js/[name].[contenthash:8].js",
        chunkFilename: "js/[name].[contenthash:8].js",
      },
      css: {
        inline: true, // https://webdiscus.github.io/html-bundler-docs/plugin-options-css
        hot: devMode ? true : false, // hot reload limitations https://webdiscus.github.io/html-bundler-docs/plugin-options-css#csshot-option
        filename: devMode ? "css/[name].css" : "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      },
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin({
      generateStatsFile: devMode,
      analyzerMode: "static",
    }),
    new SitemapPlugin({
      base: "https://angushon.io",
      paths,
      options: {
        filename: "sitemap.xml",
        lastmod: true,
        changefreq: "monthly",
        priority: 0.4,
        skipgzip: true,
      },
    }),
    new RobotstxtPlugin({
      userAgents: [
        {
          name: "*",
          disallow: isProduction ? [] : ["/"], // Disallow all in non-production
          allow: isProduction ? ["/"] : [], // Allow all in production
        },
      ],
      sitemap: isProduction ? "https://angushon.io/sitemap.xml" : undefined,
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
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
  performance: {
    hints: false,
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: isProduction,
        terserOptions: {
          compress: isProduction,
          mangle: isProduction,
        },
      }),
      new CompressionPlugin({
        algorithm: "gzip",
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
    chunkIds: devMode ? "named" : "deterministic",
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name(module) {
            // https://stackoverflow.com/a/65860864
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            // prettier-ignore
            const match = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            );
            if (!match) {
              return "vendor";
            }
            const packageName = match[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: devMode ? 3000 : 8080,
    allowedHosts: "auto",
    hot: true,
    liveReload: true,
    headers: {
      "Cache-Control": "no-store",
    },
    static: {
      // https://webdiscus.github.io/html-bundler-docs/plugin-options-css#csshot-option
      directory: path.join(__dirname, "build/"),
    },
    watchFiles: {
      paths: ["src/**/*.(html|eta)", "public/**/*"],
      options: { usePolling: true },
    },
  },
};
