function isPrime(a,b){
    let c=0;
    isPrime=true;
    for(i=a;i<=b;i++){
        c=i;
       
        if(c==2){
            console.log(c);
        }
        else{
            let isPrime=false;
            for(j=2;j<=Math.sqrt(c);j++){
                if(c%j===0){
                    isPrime=true;
                    break;
                }
            }
            if(!isPrime){
                console.log(c);
        }
         
    }
    }
   
}

console.log(isPrime(10,20));