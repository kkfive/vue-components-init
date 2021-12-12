var path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptiomizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const getEntry = require('./webpack/getEntry')
const getLoader = require('./webpack/loader/index')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: getEntry('./src/entry/'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]/app.js',
    clean: true
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new OptiomizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/app.css' // 对输出的文件进行重命名,默认为main.css
    })
  ],
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false,
  mode: process.env.NODE_ENV
}
