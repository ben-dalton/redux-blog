const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const sassLoaders = [
	'css-loader',
	'postcss-loader',
	'sass-loader?indentSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
  entry: {
    app: ['./src/index.js']
	},
  output: {
		filename: '[name].js',
    path: path.join(__dirname, '/'),
    publicPath: '/',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
			},
			{
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	postcss: [
		autoprefixer({
			brosers: ['last 2 versions']
		})
	],
  resolve: {
    extensions: ['', '.js', '.jsx', '.sass'],
		root: [path.join(__dirname, './src')]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

module.exports = config;
