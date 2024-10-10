let a=169;
if(a==1){
    console.log("Enter other value");
}
else if(a==2||a==3||a==5||a==7){
    console.log("The is prime number");
}
else if((a%1==0 && a%a==0) && (a%1<=20==0)){
    console.log("Not Prime");
}
else{
    console.log("The is prime number");
}