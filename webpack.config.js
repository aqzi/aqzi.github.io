const webpack = require('webpack'); //to access built-in plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const config = {
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'oclat'),
    filename: 'bundle.js',
    publicPath:'/oclat/'
  },
  resolve: {
		extensions: [ '.js', '.jsx', '.css', '.less', '.jpg', 'jpeg', '.png', '.gif', '.svg' ]
	},
	performance: {
		hints: false
	},
  module: {
    rules: [
      {
				enforce: 'pre',
				test: /\.js$/,
				use: "source-map-loader"
			},
      {
				enforce: 'pre',
				test: /\.jsx?$/,
				use: "source-map-loader"
			},
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      },
      {
				test: /.*\.less$/,
				 use: ExtractTextPlugin.extract({
					use:[ 'css-loader', 'less-loader' ],
					fallback: 'style-loader'
				})
			}
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
		contentBase: "src/",
		historyApiFallback: true
	},
  plugins: [
    new ExtractTextPlugin({
			filename: '[name].css',
			disable: false,
			allChunks: true
		}),
		new HtmlWebpackPlugin(
			{
				template: "./src/index.html",
				inject: true
			}
		),
		new CleanWebpackPlugin(
			["oclat"], {
				verbose: true
			}
		),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
