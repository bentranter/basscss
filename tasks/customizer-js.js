
var fs = require('fs');
var gulp = require('gulp');
var browserify = require('gulp-browserify');

module.exports = function() {
  var app = fs.readFileSync('./node_modules/custom-css/js/app.min.js', 'utf8');
  fs.writeFileSync('./docs/customizer/customizer.min.js', app);
  //gulp.src('./docs/src/js/customizer.js')
  //  .pipe(browserify())
  //  .pipe(gulp.dest('./docs/customizer'));
};

