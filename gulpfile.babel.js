import G from 'gulp';
import PC from 'gulp-postcss';
import AP from 'autoprefixer';
import pcSV from 'postcss-simple-vars';
import pcNested from 'postcss-nested';
import CI from 'postcss-import';
import GW from 'gulp-watch';
import P from 'perfectionist';

/** (Destructuring) */

const [
  gulp,
  postcss,
  autoprefixer,
  cssvars,
  nested,
  cssImport,
  watch,
  perfectionist
] = [G, PC, AP, pcSV, pcNested, CI, GW, P];

/** (Data Structure Paths) */

const paths = {
  SRC: './app/assets/styles/style.css',
  DEST: './app/_build/styles'
};


gulp.task('default', () => {
  console.log('Hooray');
});

gulp.task('html', () => {
  console.log('Imagine');
});

gulp.task('styles', () => gulp.src(`${paths.SRC}`)
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer, perfectionist({ indentSize: 2 })]))
  .pipe(gulp.dest(`${paths.DEST}`)));

gulp.task('watch', () => {
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
