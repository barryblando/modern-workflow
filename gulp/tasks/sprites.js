import G from 'gulp';
import svgS from 'gulp-svg-sprite';
import GR from 'gulp-rename';
import D from 'del';
import RS from 'run-sequence';

const [gulp, svgSprite, rename, del, runSequence] = [G, svgS, GR, D, RS];

const config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () => {
  del(['./app/_build/sprite', './app/assets/images/sprites']);
});

/* Generate svg & css and put it to _build */
gulp.task('createSprite', ['beginClean'], () => {
  gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/_build/sprite/'));
});

/* After generating, create  a copy of svg for assets */
gulp.task('copySpriteGraphic', ['createSprite'], () => {
  gulp.src('./app/_build/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

/* After generating css, create a copy for modules */
gulp.task('copySpriteCSS', ['createSprite'], () => {
  gulp.src('./app/_build/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

/* After copying css, clean _build folder */
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () => {
  del('app/_build/sprite');
});

gulp.task('icons', (done) => {
  runSequence('beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean', done);
});

// function beginClean() {
//   return del(['./app/_build/sprite', './app/assets/images/sprites']);
// }

// function createSprite() {
//   return gulp.src('./app/assets/images/icons/**/*.svg')
//     .pipe(svgSprite(config))
//     .pipe(gulp.dest('./app/_build/sprite/'));
// }

// function copySpriteGraphic() {
//   return gulp.src('./app/_build/sprite/css/**/*.svg')
//     .pipe(gulp.dest('./app/assets/images/sprites'));
// }

// function copySpriteCSS() {
//   return gulp.src('./app/_build/sprite/css/*.css')
//     .pipe(rename('_sprite.css'))
//     .pipe(gulp.dest('./app/assets/styles/modules'));
// }

// function endClean() {
//   return del('app/_build/sprite');
// }

// gulp.task('icons', () => {
//   // 1. Run the clean task
//   beginClean().then(() => {
//     // 2. Clean is complete. Now run two tasks in parallel
//     Promise.all([
//       createSprite(),
//       copySpriteGraphic(),
//       copySpriteCSS()
//     ]).then(() => {
//       // 3. Tasks are complete, now run the final task.
//       endClean();
//     });
//   });
// });
