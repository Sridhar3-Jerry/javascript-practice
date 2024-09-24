//1.pro
let a=1;
let sum=0;
for(i=a;i<=20;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(sum);


//2.pro
let b=3;
let n=10;
let sum1=1;
for(i=1;i<=10;i++){
    sum1=i*b;
    console.log(sum1);
}




//3.pro
let teamscore=102;
let targetscore=99;
let overleft=2;
if(teamscore>=targetscore){
    console.log("Team wins by DL method" );
}
else if(teamscore<targetscore && overleft>0){
    console.log("Match to be continued" );
}
else{
    console.log("Team loses by DL method");
}