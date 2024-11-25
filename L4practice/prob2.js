// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.

let a=[10,20,30,50,40,60];
let max=a[0];
for(i=0;i<=a.length;i++){
    if(a[i]>max){
        max=a[i]
    }
}
let index=a.indexOf(max);
console.log(max);
console.log(index);