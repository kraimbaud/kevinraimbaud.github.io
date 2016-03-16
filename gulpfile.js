var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    cssnano    = require('gulp-cssnano'),
    imagemin   = require('gulp-imagemin'),
    sass       = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('default', function () {
    gulp.src('assets/src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest('assets/dist/css'))
        .pipe(livereload());

    gulp.src('assets/src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/dist/js'))
        .pipe(livereload());

    gulp.src('assets/src/img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/dist/img'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/src/sass/*.scss', ['default']);
    gulp.watch('assets/src/js/*.js', ['default']);
    gulp.watch('assets/src/img/*.jpg', ['default']);
});