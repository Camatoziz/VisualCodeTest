function findMultiples(integer, limit) {
    //your code here
    var arrMult = []
    for (var i = integer; i <= limit; i += integer ) {
        arrMult.push(i)
    }
    return arrMult
}
