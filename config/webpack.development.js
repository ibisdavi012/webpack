const { HotModuleReplacementPlugin } = require('webpack');
const webpackCommonConfig = require('./webpack.common');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');

/**@type {import('webpack').Configuration} */
const webpackDevelopmentConfig = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /.(css|scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		port: 2527,
		contentBase: '../dist',
		open: 'chrome',
		hot: true,
	},
	target: 'web',
	devtool: 'eval-source-map',
	plugins: [new HotModuleReplacementPlugin(), new ReactRefreshPlugin()],
};

module.exports = merge(webpackCommonConfig, webpackDevelopmentConfig);
