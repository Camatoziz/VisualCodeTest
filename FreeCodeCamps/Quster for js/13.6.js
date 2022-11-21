let arr = [[1, 2, 3], [2, 3], [3, 5]]
let sum = 0
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++){
		sum += arr[i][j]
	}
}
console.log(sum)