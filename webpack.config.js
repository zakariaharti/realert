const CleanPlugin = require('webpack-clean-plugin');
const path = require('path');

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: {
    main: './src/index.js'
  },
  resolve: {
    extensions: [".js",".jsx"]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
    library: 'realert',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanPlugin(['build'])
  ]
}
