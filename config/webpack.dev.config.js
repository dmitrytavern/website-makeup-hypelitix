const path 								= require('path');
const dotenv 							= require('dotenv');

const SpriteLoaderPlugin 	= require('svg-sprite-loader/plugin');
const LiveReloadPlugin 		= require('webpack-livereload-plugin');

dotenv.config();

let {
	names,
	routeDist,
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
		path: prodDir
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
		})
	],
	devtool: 'eval-cheap-source-map',
	resolve: {
		extensions: ['*', '.js']
	},
	module: {
		rules: [
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