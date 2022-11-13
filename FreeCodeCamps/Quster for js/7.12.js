let arr = [1, 2, 3, 4, 5]
arr.splice(1, 0, 'a', 'b')
arr.splice(-1, 0, 'c')
arr.splice(-1, 1, 5, 'd')
console.log(arr)