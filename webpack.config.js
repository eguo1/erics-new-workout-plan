const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './client/main.jsx',
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
