// Plugins
var gulp         = require('gulp'),
		watch        = require('gulp-watch'),
		sass         = require('gulp-ruby-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		plumber      = require('gulp-plumber'),
		gutil        = require('gulp-util');

gulp.task('styles', function() {
  gulp.src('sass/*.scss')
    .pipe(sass({style: 'compressed'}))
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .on('error', function(err) {
      // Would like to catch the error here
    })
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['styles']);
});

// Make all tasks run and then watch for the rest
gulp.task('default', ['styles', 'watch']);