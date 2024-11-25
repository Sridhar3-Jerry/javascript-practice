// Reverse a string without using library functions.

let a="Stephen";
let b=[];

for(i=a.length-1;i>=0;i--){
    b[b.length]=a[i];
    
}
console.log(b.join(""))