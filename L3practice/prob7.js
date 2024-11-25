// function sumOfFactorial(sum){
//     let tot=1;
//     if(sum==0 || sum==1){
//         return 1;
//     }
//     else{
//         for(i=1;i<=sum;i++){
//             tot*=i;
//         }
//         return tot;
//     }
// }

// function sum(n){
//     let total=0;
//     if(n==0){
//         return 1;
//     }
//     else{
//         for(j=1;j<=n;j++){
//                 total+=sumOfFactorial(j)
//         }
//         return total
//     }
// }
// console.log(sum(1));




// function gcd(a,b){
//     let d=Math.max(a,b);
//     let e=0
//     for(i=1;i<=d;i++){
//         if(a%i==0 && b%i==0){
//             e=i;
//         }
//     }
//     return e;
// }
// function lcm(m,n){
//     let f=m*n/gcd(m,n);
//     return f;
// }
// console.log(gcd(22,11));




function primeNum(a){
        if(a<=1){
            return false;
        }
        else{
            for(j=2;j<=Math.sqrt(a);j++){
                if(a%j==0){
                    return false
                }
            }
        }

    return true;
}
function print(a){
    for(i=0;i<=a.length-1;i++){
        if(primeNum(a[i])==true){
            console.log(a[i])
        }
        else{
            console.log("not Prime");
        }
    }
}
print([10,30,40,2])