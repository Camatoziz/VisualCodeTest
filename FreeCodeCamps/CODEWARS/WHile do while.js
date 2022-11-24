function padIt(str,n){
    //coding here
    while (n>0) {
        n%2===0 ? str=str+"*" : str="*" + str
        n--
    }
    return str
}