var gulp = require('gulp'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch');

gulp.task('default', function() {
  var locals = {
    title: 'Hello',
    panels: [{
      name: '3 Words',
      src: 'img/words.png',
      desc: 'Write a story 3 words at a time'
    }, {
      name: 'Get to the Bottom!',
      src: 'img/bottom.png',
      desc: 'Turn-based Pacman'
    }]
  }

  return watch('index.pug')
    .pipe(pug({locals: locals}))
    .pipe(gulp.dest('./'));
});
