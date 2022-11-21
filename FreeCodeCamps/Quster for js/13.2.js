let arr = []
for (var i = 1; i <= 5; i++) {
	let str = ''
	for (var j = 1; j <= i; j++) {
		str = str + i
	}
	arr.push(str)
}
console.log(arr)