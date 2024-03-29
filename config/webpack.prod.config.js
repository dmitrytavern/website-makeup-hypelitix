const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

let {
  names,
  routeRes,
  routeDist,
  resDir,
  prodDir,
  modeCompileCollect,
  configDir,
  pages,
  rules,
} = require("./webpack.config");

const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const ClassCopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack");

const entry = {
  "vendor.min": path.join(resDir, "index.js"),
  "app.min": path.join(resDir, "js", "app.js"),
};

module.exports = {
  mode: "production",
  entry,
  output: {
    filename: path.join(routeDist.js, names.appJS),
    publicPath: process.env.APP_PUBLIC_PATH,
		path: path.join(prodDir, process.env.APP_PUBLIC_PATH)
  },
  devServer: {
    contentBase: prodDir,
    port: 3401,
  },
  plugins: [
    ...pages,
    new MiniCssExtractPlugin({
      filename: path.join(routeDist.css, names.appCSSmin),
    }),
    new MiniCssExtractPlugin({
      filename: path.join(routeDist.css, names.appCSS),
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
    new ClassCopyPlugin({
      patterns: [
        { from: "src/lang/", to: "lang" },
      ],
    }),
    new ImageminPlugin({
      bail: false,
      cache: true,
      imageminOptions: {
        plugins: [
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
        ],
      },
    }),
  ],
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
      new TerserPlugin({
        parallel: true,
        sourceMap: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.vendor\.min\.js$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: path.join("[name].[ext]"),
              outputPath: "js",
              publicPath: path.join(process.env.APP_PUBLIC_PATH, "js"),
            },
          },
        ],
      },
      rules.svg,
      rules.pug,
      rules.fonts,
      rules.js,
      rules.img,
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: configDir,
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              prependData: "$color-theme: " + process.env.COLOR_THEME,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: configDir,
              },
            },
          },
        ],
      },
    ],
  },
};
