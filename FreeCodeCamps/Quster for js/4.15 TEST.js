var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск']
var day = 5
for (var i = 0; i < arr.length; i++) {
	if (arr[i] == day -1) {
		console.log(arr[i].italics())
	}else {
		console.log(arr[i])
	}
}
