const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**@type {import('webpack').Configuration} */
module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]_[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /.(jpg|svg|png|jpeg|gif)/,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: './public/index.html' }),
	],
};
