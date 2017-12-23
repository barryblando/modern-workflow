import G from 'gulp';
import svgS from 'gulp-svg-sprite';
import GR from 'gulp-rename';
import D from 'del';
import RS from 'run-sequence';
import S2P from 'gulp-svg2png';

const [gulp, svgSprite, rename, del, runSequence, svg2png] = [G, svgS, GR, D, RS, S2P];

const config = {
  shape: {
    /**
     * To fix artifacts on SVG ('cause of very edge of neighboring icon showing up) when it comes to other browsers
     * 1px space in between the icons, set logo scale to (.565)
     */
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      // create SVG filter function for modernizr for browser compatibility
      variables: {
        replaceSvgWithPng() {
          return function (sprite, render) {
            // split .svg and change to .png so there will be two images for html svg(.svg) & html no-svg(.png)
            return render(sprite).split('.svg').join('.png');
          };
        }
      },
      // to remove .css from the file
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

gulp.task('createPngCopy', ['createSprite'], () => {
  console.log('Copying SVG to PNG');
  return gulp.src('./app/_build/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/_build/sprite/css'));
});

/* After generating, create  a copy of svg for assets */
gulp.task('copySpriteGraphic', ['createPngCopy'], () => {
  console.log('Copying Sprite Graphics');
  return gulp.src('./app/_build/sprite/css/**/*.{svg,png}')
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

gulp.task('icons', done => runSequence('beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean', done));

