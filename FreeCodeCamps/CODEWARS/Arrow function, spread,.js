var shuffleIt=(arr, ...numArr)=>{
    for (var i = 0; i < numArr.length; i++) {
        [arr[numArr[i][0]], arr[numArr[i][1]]] = [arr[numArr[i][1]], arr[numArr[i][0]]]
    }
    return arr
}