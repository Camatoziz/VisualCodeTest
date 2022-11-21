function sumNum(num) {
	var sum = arrSum(getArr(num))
	if (sum >= 9) {
		return sumNum(sum)
	} else {
		return sum
	}
}

function getArr(num) {
	return String(num).split('')
}

function arrSum(arr) {
	var res = 0
	for (var i = 0; i < arr.length; i++){
		res += Number(arr[i])
	}
	return res
}
console.log(sumNum(178))
