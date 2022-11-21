let arr = [1, 2, 3, 5, 17, 95, 67, 63, 71]
function num(arr) {
	console.log(arr[0])
	arr.splice(0, 1)
	if (arr.length != 0){
		num(arr)
	}
}
num(arr)