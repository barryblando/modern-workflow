import G from 'gulp';
import BS from 'browser-sync';

const [
  gulp,
  browserSync
] = [G, BS.create()];

const [reload] = [browserSync.reload];

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './app/'
    }
  });

  gulp.watch('./app/assets/styles/**/*.css', ['cssInject']);
  gulp.watch('./app/assets/scripts/**/*.js', ['scriptsRefresh']);
  gulp.watch('./app/index.html').on('change', reload);
});

/* Reload script after Webpack Finished */
gulp.task('scriptsRefresh', ['scripts'], () => {
  reload();
});

export default reload;
