const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

function compileSass() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("dist/css/"))
    .pipe(browserSync.stream());
}
gulp.task("sass", compileSass);

// Juntar JS
function javaScript() {
  return gulp
    .src("js/*.js")
    .pipe(concat("main.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist/js/"))
    .pipe(browserSync.stream());
}
gulp.task("mainjs", javaScript);

function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}
gulp.task("browser-sync", browser);

function watch() {
  gulp.watch("scss/*.scss", compileSass);
  gulp.watch("js/*.js", javaScript);
  gulp.watch("*.html").on("change", browserSync.reload);
}
gulp.task("watch", watch);

gulp.task("default", gulp.parallel("watch", "browser-sync", "sass", "mainjs"));
