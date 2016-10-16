var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('default', function() {
  return gulp.src('index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
});
