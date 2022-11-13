let arr = [1, 2, 3, 3, 4, 5]
let arr1 = [1, 2, 3]
let arr2 = [1, 1, 3]
function repeat (arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			return true
		}
	}
	return false
}
if (repeat(arr2) == true) {
	console.log('Да')
} else {
	console.log('Нет')
}
