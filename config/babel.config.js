module.exports = {
	comments: false,
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		]
	],
	plugins: [
		"@babel/plugin-proposal-private-methods",
		'@babel/plugin-proposal-class-properties',
		"@babel/plugin-transform-arrow-functions"
	]
};