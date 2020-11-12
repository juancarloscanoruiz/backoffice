const gulp = require('gulp'), 
browserSync = require('browser-sync').create();

gulp.task('default', () => {
    browserSync.init({
        notify: false,
        proxy: 'http://127.0.0.1:8000',
        // open: false,
        // files: [
        //         'app/**/*.php',
        //         'resources/views/**/*.php',
        //         'public/js/**/*.js',
        //         'public/css/**/*.css'
        // ]
    });
    gulp.watch("./resources/views/**/*.blade.php").on('change', browserSync.reload);
    
    gulp.watch("./resources/js/*.js").on('change', browserSync.reload);
    gulp.watch("./resources/js/**/*.js").on('change', browserSync.reload);
    // gulp.watch("./app/Http/Controllers/**/*.php").on('change', browserSync.reload);
    // gulp.watch("./resources/js/**/*.js").on('change', browserSync.reload);
    // gulp.watch("./resources/js/**/*.vue").on('change', browserSync.reload);
    // gulp.watch("./resources/views/*.blade.php").on('change', browserSync.reload);
    // gulp.watch("./resources/views/**/*.blade.php").on('change', browserSync.reload);
    // gulp.watch("./routest/*.php").on('change', browserSync.reload);
});