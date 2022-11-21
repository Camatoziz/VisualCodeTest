let arr = [0, 1, 4, 7, 11, -1,-7]

function isNumberRange(num) {
	return num > 0 && num <10
}

let newArr = []

for (var i = 0; i < arr.length; i++) {
	if (isNumberRange(arr[i])) {
		newArr.push(arr[i])
	}
}
console.log(newArr)