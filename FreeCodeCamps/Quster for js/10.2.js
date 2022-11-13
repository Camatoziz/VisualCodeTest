var arr = [1, 2, 5, 4, 8, 0]
function hasElem (array) {
 for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 5) {
		return true
	}
}
return false
}
console.log(hasElem(arr))