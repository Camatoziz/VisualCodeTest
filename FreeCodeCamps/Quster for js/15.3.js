function getDigits(num) {
return String(num).split('')
}

function getDigitsSum (arr) {
	var sum = 0
for (var i = 0; i < arr.length; i++){
	sum += Number(arr[i])
}
return sum
}

function sumYear(sum) {
	return 13 === getDigitsSum(getDigits(i))
}

for (var i = 1; i <= 2022; i++) {
	if (sumYear(getDigitsSum(getDigits(i)))){
		console.log(i)
	}
}
