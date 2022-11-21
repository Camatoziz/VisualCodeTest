function getDivisors(num) {
	var div = []
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) {
			div.push(i)
		}
	}
	return div
}
console.log(getDivisors(200))