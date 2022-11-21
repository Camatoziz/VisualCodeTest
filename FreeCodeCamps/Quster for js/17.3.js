function wholeDevider (num) { 
	var sum = getDigitsSum(num);
	if (sum >= 9) { 
		return wholeDevider (sum);
		 } else {
			return sum;
			} 
}
		
function getArr (num) {
			return String(num).split(''); 
}

function getSum (arr) {
	let res = 0;
	for (let i = 0; i < arr.length; i++) {
		res += Number(arr[i]);
		}
		return res;
		}
		
		function getDigitsSum(num) {
			return getSum(getArr(num));
			}
			console.log(wholeDevider(456));