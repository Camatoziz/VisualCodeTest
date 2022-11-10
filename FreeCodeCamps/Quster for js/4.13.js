var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var i = 0, str = '-'; i < arr.length; i++) {
	str += String(arr[i] + '-')
}
console.log(str)