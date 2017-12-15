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

gulp.task('beginClean', () => del(['./app/_build/sprite', './app/assets/images/sprites']));

/* Generate svg & css and put it to _build */
gulp.task('createSprite', ['beginClean'], () => {
  console.log('Creating Sprites');
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/_build/sprite/'));
});

/* After generating, create  a copy of svg for assets */
gulp.task('copySpriteGraphic', ['createSprite'], () => {
  console.log('Copying Sprite Graphics');
  return gulp.src('./app/_build/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

/* After generating css, create a copy for modules */
gulp.task('copySpriteCSS', ['createSprite'], () => {
  console.log('Copying Sprite CSS');
  return gulp.src('./app/_build/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

/* After copying css, clean _build folder */
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () => del('app/_build/sprite'));

gulp.task('icons', done => runSequence('beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean', done));

