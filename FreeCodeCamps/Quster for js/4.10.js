var arr = [-1, -2, -10, -3, 4, 5, 10, 19]
for (var i = 0, sum = 0; i < arr.length; i++) {
	if (arr[i] > 0) sum += arr[i]
}
console.log(sum)