const { src, dest, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

function compileSass() {
  return src("scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist/css/"))
    .pipe(browserSync.stream());
}

function javaScript() {
  return src("js/*.js")
    .pipe(concat("main.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(dest("dist/js/"))
    .pipe(browserSync.stream());
}

function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

function watchGulp() {
  watch("scss/*.scss", compileSass);
  watch("js/*.js", javaScript);
  watch("*.html").on("change", browserSync.reload);
}

exports.default = parallel(watchGulp, browser, compileSass, javaScript);
