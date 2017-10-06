const gulp = require('gulp'),
    sass = require('gulp-sass'),
    CacheBuster = require('gulp-cachebust'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

const sassWatchPath = './styles/**/*.scss';

const cachebust = new CacheBuster();

gulp.task('sass', () =>
    gulp.src(sassWatchPath)
        .pipe(sass({
            trace: true,
            verbose: true
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./styles'))
);


gulp.task('copy', () =>
    gulp.src('./styles/style.css')
        .pipe(cleanCSS({compatibility: 'ie11'}))
        .pipe(cachebust.resources())
        .pipe(gulp.dest('./public/styles'))
);

gulp.task('build-html', () => 
    gulp.src('./index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./'))
);

gulp.task('clean', () => del('public/styles/**', {force:true}));

gulp.task('build', ['sass', 'clean', 'copy', 'build-html']);

gulp.task('sass-watch', () => gulp.watch(sassWatchPath, ['build']));