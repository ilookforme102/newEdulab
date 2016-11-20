/**
 * Created by Khoa's PC on 10/31/2016.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', [], function () {
    console.log("Command:\n   serve - run live reload server");
});

gulp.task('serve', [], function () {

    var files = [
        'app/**/*.html',
        'app/**/*.css',
        'app/assets/imgs/**/*.png',
        'app/**/*.js',
        'app/*.js',
        'app/**/**/*.html',
        'app/**/**/*.css',
        'app/**/**/*.js'

    ];

    browserSync.init(files, {
        server: {
            baseDir: './app'
        }
    });
    gulp.watch(files, reload);

});