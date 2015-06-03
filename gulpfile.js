/**
 * Created by James Lawrence on 03/06/2015.
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("default", function() {

	return gulp.src("./public/js/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});