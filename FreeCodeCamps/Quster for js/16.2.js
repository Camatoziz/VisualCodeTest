function ucfirst(str) {
	str = str.split('_')
	for (var i = 1; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].slice(1)
	}

	return str.join('')
}
console.log(ucfirst('я_ел_сладкую_булочку'))
