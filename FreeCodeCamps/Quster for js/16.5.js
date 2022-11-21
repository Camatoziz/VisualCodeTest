function replaceNum(str) {
	str = str.split('')
	for (var i = 1; i < str.length; i += 2) {
		str.splice(i - 1, 0, str.splice(i, 1))
	}
	return str.join('')
}
console.log(replaceNum('123456789'))