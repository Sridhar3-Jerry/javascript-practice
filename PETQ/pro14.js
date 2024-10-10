let a="srie";
let b=a.split('');
let sum=0;
for(i=0;i<=b.length-1;i++){
    if(b[i]=="a" || b[i]=="e" || b[i]=="i" || b[i]=="o" || b[i]=="u"){
        sum=sum+1;
    }
}
console.log(b);
console.log(sum);