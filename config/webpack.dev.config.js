const path 								= require('path');
const dotenv 							= require('dotenv');

const SpriteLoaderPlugin 	= require('svg-sprite-loader/plugin');
const LiveReloadPlugin 		= require('webpack-livereload-plugin');
const ClassCopyPlugin     = require("copy-webpack-plugin");

dotenv.config();

let {
	names,
	routeDist,
	routeRes,
	resDir,
	prodDir,
	pages,
	rules
} = require('./webpack.config')


module.exports = {
	mode: 'development',
	entry: {
		'vendor': path.join(resDir, 'index.js'),
		'app': path.join(resDir, 'js', 'app.js')
	},
	output: {
		filename: path.join(routeDist.js, names.appJS),
		publicPath: process.env.APP_PUBLIC_PATH,
		path: path.join(prodDir, process.env.APP_PUBLIC_PATH)
	},
	devServer: {
		contentBase: prodDir,
		port: 3401
	},
	plugins: [
		...pages,
		new LiveReloadPlugin(),
		new SpriteLoaderPlugin({
			plainSprite: true
		}),
		new ClassCopyPlugin({
      patterns: [
        { from: "src/lang/", to: "lang" },
      ],
    }),
	],
	devtool: 'eval-cheap-source-map',
	resolve: {
		extensions: ['*', '.js']
	},
	module: {
		rules: [
			{
				test: /\.vendor\.min\.js$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: path.join('[name].[ext]'),
							outputPath: 'js',
							publicPath: path.join(process.env.APP_PUBLIC_PATH, 'js'),
						},
					},
				]
			},
			rules.svg,
			rules.pug,
			rules.fonts,
			rules.img,
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							prependData: '$color-theme: ' + process.env.COLOR_THEME,
						}
					}
				]
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					}
				]
			}
		]
	}
};