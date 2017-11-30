import G from 'gulp';
import PC from 'gulp-postcss';
import AP from 'autoprefixer';
import pcSV from 'postcss-simple-vars';
import pcNested from 'postcss-nested';
import CI from 'postcss-import';
import GW from 'gulp-watch';

const [gulp, postcss, autoprefixer, cssvars, nested, cssImport, watch] = [G, PC, AP, pcSV, pcNested, CI, GW];

gulp.task('default', () => {
  console.log('Hooray');
});

gulp.task('html', () => {
  console.log('Imagine');
});

gulp.task('styles', () => gulp.src('./app/assets/styles/style.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/_build/styles')));

gulp.task('watch', () => {
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
