function isEven(num) {
	return num % 2 == 0
}

let arr = [1, 3, 4, 7, 18, 19, -4, 23, 484]
let newArr = []
for (var i = 0; i < arr.length; i++) {
	if (isEven(arr[i])) {
		newArr.push(arr[i])
	}
}

console.log(newArr)