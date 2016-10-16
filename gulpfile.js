var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('default', function() {

  var locals = {
    title: 'Hello'
  }

  return gulp.src('index.pug')
  .pipe(pug({locals: locals}))
  .pipe(gulp.dest('./'))
});
