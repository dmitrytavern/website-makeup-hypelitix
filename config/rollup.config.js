const fs = require('fs')
const path = require('path')
const { modeCompileSplit } = require('./webpack.config')
const array = fs
	.readdirSync(path.join('src', 'js', 'pages'))
	.filter(fileName => fileName.endsWith('.js'))
	.map(function (e) {
		return {
			input: path.join('src', 'js', 'pages', e),
			output: {
				file: path.join('dist', 'js', 'pages', e),
				format: "iife"
			}
		}
	})


export default modeCompileSplit ? array : []