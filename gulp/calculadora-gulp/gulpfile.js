const { src, dest, series, parallel } = require("gulp");
const rename = require("gulp-rename");
const minifyHTML = require("gulp-htmlmin");
const minifyJS = require("gulp-uglify");
// const minifyCSS = require("gulp-uglifycss");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const clean = require("gulp-clean");

// const base = function () {
//   return src("src/pages/*.html").pipe(dest("public/"));
// };

const html = function () {
  return src("src/pages/*.html")
    .pipe(minifyHTML({ collapseWhitespace: true }))
    .pipe(dest("public/"));
};

const javascript = function () {
  return src("src/js/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(minifyJS())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("public/assets/js/"));
};

const convertSass = function () {
  return src("src/scss/*.scss")
    .pipe(concat("style.css"))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("public/assets/css/"));
};

function cleanPublic() {
  return src("public/", { allowEmpty: true }).pipe(clean({ read: false }));
}

exports.default = series(cleanPublic, parallel(html, javascript, convertSass));
