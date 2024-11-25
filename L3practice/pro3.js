// GCD SUM 
let a=10;
let b=20;
let c=0;
if(a>b){
    c=a;
}
else{
    c=b;
}
for(i=2;i<=c;i++){
    if(a%i==0 && b%i==0){
        var d=i;
    }
}
if(d>=2){
    console.log(d);
}
else{
    console.log("There is no GCD");
}

