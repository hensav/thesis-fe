var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
  entry:  {
    app: [
      path.resolve(__dirname, 'src/index.js'),
    ],
    vendor: [
      'react', 'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: ['css-loader','sass-loader'],
          publicPath: '/dist'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015","react", "stage-0"],
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      },
      {
        test: /\.wav$/,
        loader: 'file-loader',
        query: {
          name: 'media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    publicPath: "/",
    historyApiFallback: true,
    compress: true,
    stats: "errors-only",
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        secure: false
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'betterself',
      hash: true,
      template: './src/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    })
  ]
}