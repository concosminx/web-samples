const gulp = require("gulp");
const gulpSass = require("gulp-sass")(require("sass"));
const path = require("path");
const karma = require("karma");
const gulpJshint = require("gulp-jshint");
const stylish = require("jshint-stylish");
const browserSync = require("browser-sync");
const htmlReplace = require("gulp-html-replace");
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const es = require('event-stream');
const ngTemplateCache = require('gulp-angular-templatecache');
const uglify = require('gulp-uglify');
const parseConfig = karma.config.parseConfig;
const Server = karma.Server;
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');


function test(cb) {
  parseConfig(
    path.resolve("./karma.conf.js"),
    { port: 9876 },
    { promiseConfig: true, throwErrors: true, singleRun: true }
  ).then(
    (karmaConfig) => {
      const server = new Server(karmaConfig, function doneCallback(exitCode) {
        console.log("Karma has exited with " + exitCode);
        cb();
        process.exit(exitCode);
      });
      server.start();
    },
    (rejectReason) => {
      /* respond to the rejection reason error */
    }
  );
}

function jshint() {
  return gulp
    .src("src/**/*.js")
    .pipe(gulpJshint())
    .pipe(gulpJshint.reporter(stylish));
}

function serve(cb) {
  browserSync({
    server: {
      baseDir: "./src",
    },
  });
  cb();
}

function serveDist(cb) {
  browserSync({
    server: {
      baseDir: "./dist",
    },
  });
  cb();
}

function sass() {
  return gulp
    .src("src/styles/app.scss")
    .pipe(gulpSass())
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest("src/styles"));
}

function reload(cb) {
  browserSync.reload();
  cb();
}

function watch(cb) {
  gulp.watch("src/styles/**/*.scss", gulp.series("sass"));
  gulp.watch("src/**/*.html", gulp.series("reload"));
  gulp.watch("src/*/*.js", gulp.series("reload"));
  cb();
}

function htmlreplace(cb) {
  return gulp
    .src("src/index.html")
    .pipe(
      htmlReplace({
        vendor: "scripts/vendor.js",
        source: "scripts/bundle.js",
      })
    )
    .pipe(gulp.dest("dist"));
}

function bundleVendor() {
  return gulp
    .src([
      "src/bower_components/angular/angular.min.js",
      "src/bower_components/angular-local-storage/dist/angular-local-storage.min.js",
      "src/bower_components/angular-ui-router/release/angular-ui-router.min.js",
    ])
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest("dist/scripts"));
}

function bundleSource() {
  return es
    .merge(
      gulp.src("src/scripts/**/*.html").pipe(
        ngTemplateCache({
          module: "packt",
          root: "scripts",
        })
      ),
      gulp.src(["src/scripts/app.js", "src/scripts/**/*.js"])
    )
    .pipe(concat("bundle.js"))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest("dist/scripts"));
}

function copyStyles (cb) {
  gulp.src('src/styles/app.css')
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('dist/styles'))
  cb();
}


exports.default = gulp.series(serve, watch);
exports.jshint = jshint;
exports.sass = sass;
exports.reload = reload;
exports.test = test;
exports.htmlreplace = htmlreplace;
exports.bundleVendor = bundleVendor;
exports.bundleSource = bundleSource;
exports.serveDist = serveDist;
exports.build = gulp.series(sass, htmlreplace, bundleVendor, bundleSource, copyStyles);

//gulp.task('heroku:production', ['build']);
