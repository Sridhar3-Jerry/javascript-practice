let a=[1,2,3,4,1];
let b=0;
for(i=0;i<=a.length-1;i++){
    if(a[i]==b){
        b=a[i];
        if(b==b){
            console.log(i)
        }
    }
}
console.log(b)