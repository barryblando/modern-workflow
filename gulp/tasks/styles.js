import G from 'gulp';
import PC from 'gulp-postcss';
import AP from 'autoprefixer';
import pcSV from 'postcss-simple-vars';
import pcNested from 'postcss-nested';
import CI from 'postcss-import';
import P from 'perfectionist';
import reload from './watch';

/** (Destructuring) */

const [
  gulp,
  postcss,
  autoprefixer,
  cssvars,
  nested,
  cssImport,
  perfectionist
] = [G, PC, AP, pcSV, pcNested, CI, P];

/** (Data Structure Paths) */

const paths = {
  SRC: './app/assets/styles/style.css',
  DEST: './app/_build/styles'
};

gulp.task('cssInject', function () {
  console.log('-----------Streaming PostCSS');
  return gulp.src(`${paths.SRC}`)
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer, perfectionist({ indentSize: 2 })]))
    .on('error', (errorInfo) => {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(`${paths.DEST}`))
    .pipe(reload({ stream: true }));
});
