const merge = require('webpack-merge')
const { resolve } = require('path')
const webpackNodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.base')

const config = {
  // Inform webpack that we're building a bundle
  // for NodeJS, rather than for the browser
  target: 'node',
  // Tell webpack the root file of our
  // server application.
  entry: './src/index.js',
  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
