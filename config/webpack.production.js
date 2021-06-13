const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackCommonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

/**@type {import('webpack').Configuration} */
const webpackProductionConfig = {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/,
				include: /\.module\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: path.resolve(
									__dirname,
									'postcss.config.js',
								),
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /.(css|sass|scss)$/,
				exclude: /\.module\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: path.resolve(
									__dirname,
									'postcss.config.js',
								),
							},
						},
					},
					'sass-loader',
				],
			},
		],
	},
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(webpackCommonConfig, webpackProductionConfig);
