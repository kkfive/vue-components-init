const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const scss = {
  test: /\.scss$/,
  use: [
    // 'vue-style-loader',
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
        // 你也可以从一个文件读取，例如 `variables.scss`
        // 如果 sass-loader 版本 = 8，这里使用 `prependData` 字段
        // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
        additionalData: `@import "@/styles/mixin.scss";`
      }
    }
  ]
}
module.exports = scss
