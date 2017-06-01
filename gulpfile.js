var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

// Gulp site build
gulp.task('build', function() {
  return gulp.src([
      'app/*.html',
      'app/assets/css/*.css',
      'app/assets/img/**',
      'app/assets/js/**'
    ], {
      base: 'app/'
    })
    .pipe(gulp.dest('build/'))
});

// Delete Previous build
gulp.task('clean', function(cb) {
  del(['build'], cb);
});

// Gulp rebuild
gulp.task('rebuild', function() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('build/'))
});

// Scripts rebuild
gulp.task('scripts', function() {
  return gulp.src('app/assets/')
    .pipe(gulp.dest('app/assets/'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('build/assets/'))
});

// Launch the Server with notifications turned off
gulp.task('browser-sync', ['sass', 'build', 'rebuild'], function() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    index: "styleguide.html",
    notify: false
  });
});

// Compile _scss and _sass into css folder
gulp.task('sass', function() {
  return gulp.src('app/assets/css/app.sass')
    .pipe(sass({
      includePaths: ['css'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '>1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8',
      format: {
        breaks: {
          afterComment: true
        }
      }
    }))
    .pipe(gulp.dest('build/assets/css'))
});

// Watch sass/scss/html files for changes and recompile
gulp.task('watch', function() {
  gulp.watch('app/assets/css/**', ['sass']);
  gulp.watch('app/*.html', ['rebuild']);
  gulp.watch('app/assets/js/**', ['scripts']);
});

// Default test, running 'gulp' will compile sass, and launch browserSync
gulp.task('default', ['browser-sync', 'watch']);
