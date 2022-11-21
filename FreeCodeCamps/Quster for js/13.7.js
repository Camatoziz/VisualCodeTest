let arr = [[[1, 2, 3], [4, 5]], [[1, 2], [3, 5]]]
let sum = 0
for (var i = 0; i < arr.length; i++){
	for (var j = 0; j < arr[i].length; j++){
		for (var k = 0; k < arr[i][j].length; k++){
			sum += arr[i][j][k]
		}
	}
}
console.log(sum)