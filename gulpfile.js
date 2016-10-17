var gulp = require('gulp'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch')
    locals = require('./config.json');

gulp.task('default', function() {
  return watch('index.pug')
    .pipe(pug({locals: locals}))
    .pipe(gulp.dest('./'));
});
