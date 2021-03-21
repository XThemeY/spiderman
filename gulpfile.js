const gulp = require('gulp')
const imageMinify = require('./gulp/imageMinify')
const scss = require('./gulp/styles')
const pug = require('./gulp/pug2html')
const fonts = require('./gulp/copyFonts')
const script = require('./gulp/script')
const server = require('./gulp/server')
const clear = require('./gulp/clear')
const svg = require('./gulp/svg')
const libs = require('./gulp/copyLibs')

exports.build = gulp.series(clear.build, gulp.parallel(pug.build,scss.build,script.build,libs.build,imageMinify.build,fonts.build))
exports.dist = gulp.series(clear.dist, gulp.parallel(pug.dist, scss.dist, script.dist,libs.dist, gulp.series(svg, imageMinify.dist), fonts.dist),libs.copyToDocs, gulp.parallel(server))

