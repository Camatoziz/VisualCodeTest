const arr = {
	'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
	'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', "saturday", 'sunday']
}
const lang = 'ru'
const day = '5'
console.log(arr[lang][day-1])