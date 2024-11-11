const gulp = require ('gulp');
const imagemin = require ('gulp-imagemin');
const sass = require ('gulp-sass') (require('sass'));
const uglify = require ('gulp-uglify');

function images() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));  
}


function styles() {
    return gulp.src('src/styles/*.scss')  
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/style'));  
}

function scripts(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}

exports.default = gulp.parallel(images, styles, scripts);





