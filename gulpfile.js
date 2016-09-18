var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var fileinclude = require('gulp-file-include');
var connect = require('gulp-connect');

gulp.task('less', function() {
	gulp.src(['less/main.less'])
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['Firefox >= 31', 'ie > 8', 'safari >= 5', 'chrome >= 40'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(rename(function (path) {
            path.basename = "main.min";
            return path;
        }))
        .pipe(gulp.dest('production/'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src(['js/*.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('production/'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
	connect.server({
		root: '',
		livereload: true
	});
});

// @@include('./view.html')
gulp.task('html', function() {
	gulp.src(['templates/*.html'])
        .pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {  
    gulp.run('connect', 'less', 'js', 'html');

    gulp.watch('js/**', function(event) {
        gulp.run('js');
    });

    gulp.watch('less/**', function(event) {
        gulp.run('less');
    });

    gulp.watch('templates/*.html', function(event) {
        gulp.run('html');
    });
})