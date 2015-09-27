/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    wiredep = require('wiredep').stream;

gulp.task('wiredep', function () {
    // place code for your default task here
    return gulp.src('./index.html')
        .pipe(wiredep({
            directory: 'bower_components'
        }))
        .pipe(gulp.dest('./dist/'));
});