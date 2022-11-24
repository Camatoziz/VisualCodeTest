function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for (var x of arr){
        (x%2==0 ? even : odd).push(x)
    }

    return [odd,even];
}