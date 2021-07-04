const js = {
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file)
}
module.exports = js
