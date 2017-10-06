const gulp = require('gulp'),
    gulpsync = require('gulp-sync')(gulp),
    sass = require('gulp-sass'),
    CacheBuster = require('gulp-cachebust'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

const stylesPath = './assets/styles';
const sassWatchPattern = `${stylesPath}/**/*.scss`;
const outputPath = './dist';

const cachebust = new CacheBuster();

gulp.task('sass', () =>
    gulp.src(sassWatchPattern)
        .pipe(sass({
            trace: true,
            verbose: true
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest(stylesPath))
);


gulp.task('copy:style', () =>
    gulp.src(`${stylesPath}/style.css`)
        .pipe(cleanCSS({ compatibility: 'ie11' }))
        .pipe(cachebust.resources())
        .pipe(gulp.dest(`${outputPath}/styles`))
);

gulp.task('copy:img', () =>
    gulp.src('./assets/images/**.*')
        .pipe(cachebust.resources())
        .pipe(gulp.dest(`${outputPath}/images`))
);

gulp.task('copy', ['copy:style', 'copy:img']);

gulp.task('replace:html', () =>
    gulp.src('./template.html')
        .pipe(rename('index.html'))
        .pipe(cachebust.references())
        .pipe(gulp.dest('./'))
);

gulp.task('replace:css', () =>
    gulp.src(`${outputPath}/styles/*.css`)
        .pipe(cachebust.references())
        .pipe(gulp.dest(`${outputPath}/styles`))
);

gulp.task('replace-hash', ['replace:html', 'replace:css']);

gulp.task('clean', () => del([outputPath, 'index.html'], { force: true }));

gulp.task('build', gulpsync.sync(['clean', 'sass', 'copy', 'replace-hash']));

gulp.task('sass-watch', () => gulp.watch(sassWatchPath, ['build']));