var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    cssnano    = require('gulp-cssnano'),
    imagemin   = require('gulp-imagemin'),
    sass       = require('gulp-sass'),
    plumber    = require('gulp-plumber'),
    concat     = require('gulp-concat'),
    concatCss  = require('gulp-concat-css'),
    webserver  = require('gulp-webserver');

gulp.task('default', ['server'], function () {
    gulp.src('assets/src/sass/*.sass')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('assets/dist/css'));

    gulp.src('assets/src/js/*.js')
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/dist/js'));

    gulp.src('assets/src/img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/dist/img'));
});

gulp.task('server', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('watch', function() {
    gulp.watch('assets/src/sass/*.sass', ['default']);
    gulp.watch('assets/src/js/*.js', ['default']);
    gulp.watch('assets/src/img/*.jpg', ['default']);
});