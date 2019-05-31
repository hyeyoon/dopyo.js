const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = [
  merge(common, {
    entry: {
      "dopyo": path.resolve(__dirname, 'src/js/chart.js'),
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
    ],
    optimization: {
      minimize: false
    }
  }),
  merge(common, {
    entry: {
      "dopyo.min": path.resolve(__dirname, 'src/js/chart.js'),
    },
    optimization: {
      minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCSSAssetsPlugin({}),
      ]
    },
  })
]
