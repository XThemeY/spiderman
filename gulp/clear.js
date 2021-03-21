const del = require('del')

module.exports.build = function clean() {
	return 	del('./build')
}

module.exports.dist = function clean() {
	return 	del('./dist')
}

module.exports.docs = function clean() {
	return 	del('./docs')
}