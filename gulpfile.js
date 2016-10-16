var gulp = require('gulp'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch');

gulp.task('default', function() {
  var locals = {
    title: 'Hello'
  }
  
  return watch('index.pug')
    .pipe(pug({locals: locals}))
    .pipe(gulp.dest('./'));
});
