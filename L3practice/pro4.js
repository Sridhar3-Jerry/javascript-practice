let c=0;
let d=0;
function findGcd(a,b){
    if(a<b){
        for(i=2;i<=b;i++){
            if(a%i==0 && b%i==0){
                c=i;
            }
        }
    }
    else if(a>b){
        for(i=2;i<=a;i++){
            if(a%i==0 && b%i==0){
                c=i;
            }
        }
    }
   
    else{
        console.log( "There is no GCD" );
    }
    return c;
}
console.log(findGcd(11,90));