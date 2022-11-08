var arr = [1, 2, 3, 4, 5, 6]
for (var i = 0, result = 0; i < arr.length; result += arr[i], i++);
console.log(result)