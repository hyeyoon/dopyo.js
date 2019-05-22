const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      // {
      //   test: /\.(ico|png|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'url-loader',
      //   options: {
      //     name: '[name].[hash].[ext]',
      //     limit: 10000,
      //     outputPath: 'images/',
      //   }
      // },
      // {
      //   test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'url-loader',
      //   options: {
      //     name: '[name].[hash].[ext]',
      //     limit: 10000,
      //     outputPath: 'fonts/',
      //   },
      // },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //       options: { minimize: true }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   template: './index.html',
    //   filename: 'index.html'
    // })
  ]
}
