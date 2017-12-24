import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import del from 'del';
import usemin from 'gulp-usemin';
import rev from 'gulp-rev';
import cssnano from 'gulp-cssnano';
import uglify from 'gulp-uglify';
import BS from 'browser-sync';

const [browserSync] = [BS.create()];

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './docs/'
    }
  });
});

gulp.task('deleteDistFolder', ['icons'], () => del('./dist'));

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  const pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/_build',
    '!./app/_build/**',
  ];
  console.log('---------> Copying General Files...');
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
  console.log('---------> Optimizing Images...');
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/icons/**/*'])
    .pipe(imagemin({
      progressive: true, // optimize jpg images even further
      interlaced: true, // GIF images
      multipass: true // SVG files
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], () => {
  gulp.start('usemin');
});

gulp.task('usemin', ['cssInject', 'scripts'], () => {
  console.log('---------> Copying, Revision & Minifying CSS & JS to Dist Folder...');
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function () { return rev(); }, function () { return cssnano(); }],
      js: [function () { return rev(); }, function () { return uglify(); }]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
