const path = require('path');

// Constant with paths
const paths = {
  BUILD: path.resolve(__dirname, 'app/_build/scripts'),
  JS: path.resolve(__dirname, 'app/assets/scripts'),
};

module.exports = {
  devtool: 'source-map',
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.BUILD,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'],
            // plugins: [require('@babel/plugin-transform-object-rest-spread')],
            cacheDirectory: true
          }
        }],
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    // html to inject script
    // new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'app/index.html') })
  ]
};
