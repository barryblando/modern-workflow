import gulp from 'gulp';
import webpack from 'webpack';

const rWebpack = require('../../webpack.config.js');

gulp.task('scripts', ['modernizr'], (callback) => {
  webpack(rWebpack, (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    // log the stats of webpack after bundling
    console.log(stats);
    // keep the gulp aware if webpack is finished bundling
    // A way to know when webpack emits the end with watch option enabled
    callback();
  });
});
