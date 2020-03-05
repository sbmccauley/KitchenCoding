var {src,dest, watch} = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
sass.compiler = require('node-sass');

function css () {
    return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
};

function min () {
    return src('src/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(dest('dist/css'))
};

//exports.default = css;

exports.default = function () {
    watch('src/*.scss', css);
    watch('src/modules/*.scss', css);
   

}
