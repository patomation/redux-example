var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/App.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Redux Example',
      template: './src/index.html',
      filename: './index.html',
    })
  ]
};
