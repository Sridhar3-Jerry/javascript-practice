// Given an array find all the values less than 15 in a new array if not print No Element less than 15.  Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15.

let array=[24, 15, 18, 25, 30];
let arr=[];
for(i=0;i<=array.length;i++){
    if(array[i]<15){
        arr.push(array[i]);
    }
}
if(arr.length==0){
    console.log("No element less than 15.")
}
else{
    console.log(arr);
}