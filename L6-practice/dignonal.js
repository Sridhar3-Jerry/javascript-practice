function diagonalDifference(arr) {
    // Write your code here
    let a=0;
    let b=0;
    for(var i=0;i<=arr.length-1;i++){
        a+=arr[i][i];
    }
    for(let j=arr.length-1;j>=0;j++){
        b+=arr[j][i];
    }
    return b-a;
}

console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));