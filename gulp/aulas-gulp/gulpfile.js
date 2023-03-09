// series = executa linha a linha
// parallel = executa tudod e uma vez
const { src, dest, parallel } = require("gulp");
const rename = require("gulp-rename");
const minifyJS = require("gulp-uglify");
const minifyCSS = require("gulp-uglifycss");
const image = require("gulp-image");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const concat = require("gulp-concat");
// const cssimport = require("gulp-cssimport");

const javascript = function () {
  return src("src/js/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(minifyJS())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("dist/assets/js/"));
};

const css = function () {
  return src("src/css/*.css")
    .pipe(concat("all.css"))
    .pipe(minifyCSS({ uglyComments: true }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("dist/assets/css/"));
};

const convertSass = function () {
  return src("src/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("dist/assets/css"));
};

// function optimizeImagem() {
//   return src("src/images/*.jpg")
//     .pipe(image())
//     .pipe(dest("dist/assets/images/"));
// }

exports.default = parallel(javascript, css, convertSass);
