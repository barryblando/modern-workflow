import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssvars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssImport from 'postcss-import';
import perfectionist from 'perfectionist';
import mixins from 'postcss-mixins';
import hexrgba from 'postcss-hexrgba';
import reload from './watch';

/** (Data Structure Paths) */

const paths = {
  SRC: './app/assets/styles/style.css',
  DEST: './app/_build/styles'
};

gulp.task('cssInject', function () {
  console.log('---------> Streaming PostCSS');
  return gulp.src(`${paths.SRC}`)
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer, perfectionist({ indentSize: 2 })]))
    .on('error', (errorInfo) => {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(`${paths.DEST}`))
    .pipe(reload({ stream: true }));
});
