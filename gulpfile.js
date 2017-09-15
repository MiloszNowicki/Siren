var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer =require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('comp', function(){
  return gulp.src('less/*less')
  .pipe(sourcemaps.init())
  .pipe(less({errLogToConsole:true}))
  .pipe(less({outputStyle:'expanded'}))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());;
})



gulp.task('less', function() {
  return gulp.src(['node_modules/bootstrap/less/bootstrap.less', 'src/less/*.less'])
  .pipe(less())
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
  .pipe(gulp.dest("src/js"))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['less'], function() {

  browserSync.init({
    server: {
      baseDir :'src',
      index : 'index.html'
    }
  });

  gulp.watch(['node_modules/bootstrap/less/bootstrap.less', 'src/less/*.less'], ['less']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
