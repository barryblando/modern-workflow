import gulp from 'gulp';
import modernizr from 'gulp-modernizr';

/* eslint-disable */
gulp.task('modernizr', () => {
  console.log();
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/_build/scripts/'));
});

/* eslint-enable */
