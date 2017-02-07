var gulp = require('gulp');
var cleanHtml = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var gulpSass = require('gulp-sass');

gulp.task('cleanHtml', function(){
   return gulp.src('./source/*.html')
           .pipe(cleanHtml({collapseWhitespace:true}))
           .pipe(gulp.dest('./dist/'));    
});
gulp.task('cleanScss', function(){
    return gulp.src('./source/scss/*.scss')
            .pipe(gulpSass().on('error', gulpSass.logError))
            .pipe(cleanCss({compatibility: 'ie8'}))
            .pipe(gulp.dest('./dist/css'));
});
gulp.task('listen', function(){
   gulp.watch('./source/scss/*.scss',['cleanScss']); 
   gulp.watch('./source/*.html',['cleanHtml']); 
});