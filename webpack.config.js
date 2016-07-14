/**
 * Created by jack on 16-7-4.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCEPATH = path.join(__dirname, 'src');
const DISTPATH = path.join(__dirname, 'build');

module.exports = {
	devtool: 'source-map',
	entry: {
		todoMVC: [SOURCEPATH + '/todoMVC/index.js'],
		weatherForecast: [SOURCEPATH + '/weather-forecast/index.js']
	},
	output:  {
		path: DISTPATH,
		publicPath: '/',
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: SOURCEPATH + '/index.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: SOURCEPATH + '/todoMVC/index.html',
			filename: 'todoMVC.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: SOURCEPATH + '/weather-forecast/index.html',
			filename: 'weather-forecast.html',
			inject: false
		}),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: SOURCEPATH
			},
			{
				test: /\.html$/,
				loader: 'html',
				query: {interpolate: true},
				include: SOURCEPATH
			}
		]
	}
}