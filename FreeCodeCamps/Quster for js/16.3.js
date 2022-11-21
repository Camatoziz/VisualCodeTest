function inArray (text, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (text == arr[i]){
			return true
		}
	}
	return false
}
console.log(inArray('Артур', ['Меня', 'зовут', 'Артур']))