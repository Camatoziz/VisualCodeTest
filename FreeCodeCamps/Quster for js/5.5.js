let arr = [4, 2, 5, 19, 13, 0, 10]
for (var i = 0, sum = 0; i < arr.length; i++) {
	sum += Math.pow(arr[i], 3)
}
console.log(sum)