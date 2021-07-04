const stylus = {
  test: /\.styl(us)?$/,
  use: [
    'vue-style-loader',
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    'postcss-loader',
    'stylus-loader'
  ]
}
module.exports = stylus
