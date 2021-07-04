const font = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  loader: 'file-loader',
  options: {
    esModule: false,
    name: '[name]_[hash:8].[ext]',
    outputPath: '/assets/font/',
    publicPath: '../font/'
  }
}
module.exports = font
