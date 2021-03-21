const gulp = require('gulp')

module.exports.build = function libs() {
	return gulp.src('src/libs/**/*.*')		
		.pipe(gulp.dest('./build/libs/'))		
}

module.exports.dist = function libs() {
	return gulp.src('src/libs/**/*.*')		
		.pipe(gulp.dest('./dist/libs/'))
}

module.exports.copyToDocs = function copyToDocs() {
	return gulp.src('./dist/**/*.*')		
		.pipe(gulp.dest('./docs/'))
}


