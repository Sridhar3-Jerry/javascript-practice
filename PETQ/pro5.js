let a=[1,2,3,4,5,6,7];
let sum=0;
function sumOfNum(a){
    for(i=0;i<=a.length-1;i++){
    if(a[i]%2==1){
        sum+=a[i];
    }
    

}
return sum;
}
console.log(sumOfNum(a))