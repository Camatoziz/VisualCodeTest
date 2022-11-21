let arr = []
function arrayFill(a, b) {
	for ( var i = 1; i <= b; i++){
		arr.push(a)
	}
	return arr
}
console.log(arrayFill('y', 6))