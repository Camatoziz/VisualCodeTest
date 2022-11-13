function day(a) {
	let obj = {
		1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вск'
	}
	if (a < 8 && a > 0) {
		return  obj[a]
	} else {
		return "Не верный день недели"
	}
}
console.log(day(8))