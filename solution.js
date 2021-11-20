var subtractProductAndSum = function(n) {
    let arr = Array.from(String(n), Number)
    let add = arr.reduce( (a,b) => a + b )
    let mult = arr.reduce( (a,b) => a * b )
    return mult - add  
};
