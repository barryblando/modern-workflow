import G from 'gulp';
import PC from 'gulp-postcss';
import AP from 'autoprefixer';
import pcSV from 'postcss-simple-vars';
import pcNested from 'postcss-nested';
import CI from 'postcss-import';
import P from 'perfectionist';
import BS from 'browser-sync';

/** (Destructuring) */

const [
  gulp,
  postcss,
  autoprefixer,
  cssvars,
  nested,
  cssImport,
  perfectionist,
  browserSync
] = [G, PC, AP, pcSV, pcNested, CI, P, BS.create()];

const [reload] = [browserSync.reload];

/** (Data Structure Paths) */

const paths = {
  SRC: './app/assets/styles/style.css',
  DEST: './app/_build/styles'
};


gulp.task('default', () => {
  console.log('Hooray');
});

gulp.task('cssInject', () => {
  console.log('-----------Streaming PostCSS');
  return gulp.src(`${paths.SRC}`)
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer, perfectionist({ indentSize: 2 })]))
    .pipe(gulp.dest(`${paths.DEST}`))
    .pipe(reload({ stream: true }));
});

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('./app/index.html').on('change', reload);
  gulp.watch('./app/assets/styles/**/*.css', ['cssInject']);
});
