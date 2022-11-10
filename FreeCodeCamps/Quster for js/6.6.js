let str = 'Артурио' , n =5 , result = ''
if (n < str.length) {
	result = str.substr(0, n) + '...'
} else {
	result = str
} 
console.log(result)