var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    uglifycss  = require('gulp-uglifycss'),
    imagemin   = require('gulp-imagemin');

gulp.task('default', function () {
    gulp.src('assets/src/css/*.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('assets/dist/css'));

    gulp.src('assets/src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/dist/js'));

    gulp.src('assets/src/img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/dist/img'));
});

gulp.task('watch', function() {
    gulp.watch('assets/src/css/*.css', ['default']);
    gulp.watch('assets/src/js/*.js', ['default']);
    gulp.watch('assets/src/img/*.jpg', ['default']);
});