var watches = ['*.pug', '*.json'];

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util');

gulp.task('default', function() {
	gutil.log('Building index.html');
	build();
	gutil.log('Watching for changes...');
 	return watch(watches, build);
});

function build() {
	var locals = require('./config.json');

	gulp.src('index.pug')
	.pipe(pug({locals: locals}))
	.pipe(gulp.dest('./'))
	.on('end', function(){ gutil.log('index.html rebuilt!')})
}