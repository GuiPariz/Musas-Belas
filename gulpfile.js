const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

function html(next) {
  gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'))

  next();
}

function css(next) {
  gulp.src('./css/*.css')
    .pipe(cleanCSS({
      advanced: true
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./build/css'))

  next();
}

exports.default = gulp.series(html, css)