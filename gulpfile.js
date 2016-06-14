/**
 * Created by common on 2016/6/13.
 */

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    rev = require('gulp-rev');

gulp.task('script', function () {
    return gulp.src(['t1.js', 't2.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('t-all.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'))
});

gulp.task('s2', ['script'], function () {
    return gulp.src(['./t-all.min.js'])
        .pipe(rev())
        .pipe(gulp.dest('./'))
});