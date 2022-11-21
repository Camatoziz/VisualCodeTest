function inArray (text, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (text == arr[i]){
			return true
		}
	}
	return false
}

function array (str){
	return str.split(' ')
}


console.log(inArray('Артур', array('Артур - это большой Артурик')))