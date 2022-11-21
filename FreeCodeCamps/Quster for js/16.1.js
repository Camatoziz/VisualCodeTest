function ucfirst(str) {
	str = str.split(' ')
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i][0].charAt(0).toUpperCase() + str[i].slice(1)
	}
	str = str.join(' ')
	return str
}
console.log(ucfirst('ты что, дурак что ли?'))
