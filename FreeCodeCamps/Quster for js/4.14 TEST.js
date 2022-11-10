var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск']
for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 'сб' || arr[i] == 'вск') {
		console.log(arr[i].bold())
	}else {
		console.log(arr[i])
	}
}