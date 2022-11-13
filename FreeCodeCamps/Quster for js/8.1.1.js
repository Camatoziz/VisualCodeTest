let str = "новая строка"
str = str.split('')
str[0] = str[0].toUpperCase()
str = str.join('')
console.log(str)