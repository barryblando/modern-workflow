const path = require('path');
const webpack = require('webpack');

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
            // presets: ['@babel/preset-env'], **use this line if you don't want to use .babelrc**
            // plugins: [require('@babel/plugin-transform-object-rest-spread')],
            cacheDirectory: true
          }
        }],
      },
      {
        // Exposes jQuery for use outside Webpack build, not necessary in this project but for future use
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },
        {
          loader: 'expose-loader',
          options: '$'
        }]
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
