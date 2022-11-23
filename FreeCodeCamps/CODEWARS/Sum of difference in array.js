function sumOfDifferences(arr) {
    function compareNumbers (a, b) {
        return a-b
    }
    arr.sort(compareNumbers)
    arr.reverse()
    var sum = 0
    var newArr = []
    if (arr.length < 2){
        return 0
    } else {
        for (var i = 0; i < arr.length - 1; i++){
            newArr.push(arr[i]-arr[i+1])
        }
        for (var j = 0; j < newArr.length; j++){
            sum += newArr[j]
        }
    }
    return sum
}