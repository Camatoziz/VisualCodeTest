let arr = []
let str = ''
for (var i = 1; i <= 5; i++) {
	for(var j = i; j <= i; j++){
		str = str + 'x'
	}
	arr.push(str)
}
console.log(arr)