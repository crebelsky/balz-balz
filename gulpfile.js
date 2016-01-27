var gulp = require('gulp');
var path = require('path');
var del = require('del');
var $ = require('gulp-load-plugins')({
    pattern: '*',
});

var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js')[environment];

var critical = require('critical');


var port = $.util.env.port || 1337;
var src = 'src/';
var dist = 'dist/';

var autoprefixerBrowsers = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 6',
    'opera >= 23',
    'ios >= 6',
    'android >= 4.4',
    'bb >= 10'
];

gulp.task('scripts', function() {
    return gulp.src(webpackConfig.entry)
        .pipe($.webpackStream(webpackConfig))
        .pipe(isProduction ? $.uglify() : $.util.noop())
        .pipe(gulp.dest(dist + 'js/'))
        .pipe($.size({
            title: 'js'
        }))
        .pipe($.connect.reload());
});

gulp.task('html', function() {
    return gulp.src(src + 'index.html')
        .pipe(gulp.dest(dist))
        .pipe($.size({
            title: 'html'
        }))
        .pipe($.connect.reload());
});

gulp.task('styles', function(cb) {
    return gulp.src(src + 'styles/main.scss')
        .pipe($.sass({
            outputStyle: isProduction ? 'compressed' : 'expanded'
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: autoprefixerBrowsers
        }))
        .pipe(gulp.dest(dist + 'css/'))
        .pipe($.size({
            title: 'css'
        }))
        .pipe($.connect.reload());

});

gulp.task('serve', function() {
    $.connect.server({
        root: dist,
        port: port,
        livereload: {
            port: 35728
        }
    });
});

gulp.task('static', function(cb) {
    return gulp.src(src + 'static/**/*')
        .pipe($.size({
            title: 'static'
        }))
        .pipe(gulp.dest(dist + 'static/'));
});

gulp.task('root-icons', function(cb) {
    return gulp.src(src + '*.{ico,png}')
        .pipe($.size({
            title: 'root-icons'
        }))
        .pipe(gulp.dest(dist));
});

gulp.task('critical', function(cb) {
    critical.generate({
        inline: true,
        base: 'dist/',
        src: 'index.html',
        dest: 'dist/index.html',
        minify: true,
        width: 320,
        height: 480
    });
});

gulp.task('lint', function() {
    return gulp.src(['src/**/*.js', '!node_modules/**'])
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.formatEach('compact', process.stderr));
});

gulp.task('watch', function() {
    gulp.watch(src + 'styles/*.scss', ['styles']);
    gulp.watch(src + 'index.html', ['html']);
    gulp.watch([src + 'app/**/*.js', src + 'app/**/*.hbs'], ['lint', 'scripts']);
});

gulp.task('clean', function(cb) {
    del([dist], cb);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['build', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function() {
    gulp.start(['static', 'root-icons', 'html', 'scripts', 'styles']);
});
