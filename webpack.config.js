var path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const getEntry = require('./webpack/getEntry')
const getLoader = require('./webpack/loader/index')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: getEntry('./src/components/'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: getLoader
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          ecma: 5,
          parse: {},
          compress: {
            // drop_console: false, //移除所有console相关代码；
            // drop_debugger: true, //移除自动断点功能；
            // pure_funcs: ['console.log', 'console.error'] //配置移除指定的指令，如console.log,alert等
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: null,
          format: {
            comments: false
          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false
        },
        extractComments: false
      })
    ]
  },
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()],
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false,
  mode: process.env.NODE_ENV
}
