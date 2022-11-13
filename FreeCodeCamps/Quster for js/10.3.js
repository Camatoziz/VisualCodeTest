function num(a) {
	for (var i = 2; i < a; i++) {
		if (a % i === 0){
			return true
		}
	}
	return false
}
console.log(num(29))
