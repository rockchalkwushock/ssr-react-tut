const merge = require('webpack-merge')
const { resolve } = require('path')

const baseConfig = require('./webpack.base')

const config = {
  // Tell webpack the root file of our
  // server application.
  entry: './src/client/index.js',
  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config)
