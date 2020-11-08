const fs 				= require('fs')
const path 			= require('path');
const package 	= require('../package.json')
const dotenv 		= require('dotenv');

dotenv.config();

// Default

const modeCompileSplit 		= process.env.COMPILE_TYPE === 'split'
const modeCompileCollect 	= process.env.COMPILE_TYPE === 'collect'
const prodDir 						= path.join(__dirname, '../', process.env.BASEDIR)
const resDir							= path.join(__dirname, '../', process.env.RESOURCES_DIR)
const configDir						= path.join(__dirname)


const names = {
	appJS: '[name].js',
	appCSS: 'app.css',
	appCSSmin: 'app.min.css',
}


const routeRes = {
	pages: 		path.join(resDir, 'pages'),
	css: 			path.join(resDir, 'css'),
	sprite:		path.join(resDir, 'img', 'sprite'),
	favicon: 	path.join(resDir, 'img', 'favicon')
}


const routeDist = {
	pages: 		prodDir,
	css: 			'css',
	js: 			'js',
	jsPages: 	'js/pages',
	fonts: 		'fonts',
	img: 			'img',
	sprite: 	'img/sprite',
	favicon: 	'img/favicon'
}


const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = fs
	.readdirSync(routeRes.pages)
	.filter(fileName => fileName.endsWith('.pug'))
	.map(page => new HtmlWebpackPlugin({
		minify: false,
		favicon: false,
		inject: false,
		package,
		routeDist,
		modeCompileSplit,
		env: process.env,
		template:  path.join(routeRes.pages, page),
		filename:  path.join(prodDir, page.replace('.pug', '.html')),
		filenameRoot: page.replace('.pug', ''),
		jsPage: fs.existsSync(routeDist.jsPages + '/' + page.replace('.pug', '.js'))
	}))



const rules = {
	js:  {test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader'},
	svg: {test: /\.svg$/, loader: 'svg-sprite-loader'},
	pug: {
		test: /\.pug$/,
		loader: {
			loader: 'pug-loader',
			options: {
				pretty: true
			}
		}
	},
	fonts: {
		test: /\.woff$|\.ttf$|\.wav$|\.mp3$|\.eot$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: path.join(routeDist.fonts, '[name].[ext]'),
				},
			},
		],
	},
	img: {
		test: /\.jpe?g$|\.gif$|\.png$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: path.join(routeDist.img, '[name].[ext]'),
				},
			},
		],
	}
}

module.exports = {
	pages,
	package,
	modeCompileSplit,
	modeCompileCollect,
	prodDir,
	resDir,
	configDir,

	names,
	routeRes,
	routeDist,

	rules
}