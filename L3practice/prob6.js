function gcd(a,b){
    let min=Math.min(a,b);
    for(i=min;i>0;i--){
        if(a%i==0 && b%i==0){
           return i;
        }
    }

}
function lcm(a,b){
    let z=gcd(a,b);
    let d=a*b;
    return d/z;
}
a=30;
b=50;
console.log(`${lcm(a,b)} ${gcd(a,b)}`)




// function lcm(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i<=a*b;i++){
//         if(i%a===0 && i%b==0){
//             console.log("yes"+i);
//             break;
//         }
//     }
// }
