const path = require('path');
const devMode = process.env.NODE_ENV || 'development';
paths = {}
// Define Paths
paths.src = {
  root: path.resolve(__dirname, './src'),
  entry: path.resolve(__dirname, './src/index.js'),
  js: path.resolve(__dirname, './src/js'),
  styles: path.resolve(__dirname, './src/sass'),
}
paths.dist = {
  root: path.resolve(__dirname, './'),
  js: path.resolve(__dirname, './js'),
  styles: path.resolve(__dirname, './')
}

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const browserSyncConfig =  {
      proxy: 'http://www.cooperschool.test'
    }


module.exports = {
  mode: devMode,
  entry: paths.src.entry,
  output: {
    path: paths.dist.root,
    filename: 'js/bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'main.css'}),
    new BrowserSyncPlugin(browserSyncConfig)
  ],
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.(sa|sc|c)ss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader', options: {importLoaders: 1}},
          // {loader: 'import-glob-loader'},
          'postcss-loader',
          {loader: 'sass-loader', options: {includePaths: ['node_modules']}}, // Enable For Sass
        ]
      }
    ]
  }

}
