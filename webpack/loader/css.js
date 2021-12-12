const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const css = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    'postcss-loader'
  ]
}
module.exports = css
