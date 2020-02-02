var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var fileinclude = require('gulp-file-include');

const { watch, series, parallel } = require('gulp');

// Used to insert html timeline events into main index page 
function fileInclude() {
    return gulp.src(['index.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'));
}

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'))

})

// Configure the browserSync task
function browserSync() {
  return browserSync.init({
    server: {
      baseDir: "./"
    }
  });
};

exports.include = fileInclude;

// Dev task
exports.dev = function() {
  watch('./css/*.css', browserSync);
  watch('./*.html', { ignoreInitial: false }, gulp.series(include, browserSync));
};
