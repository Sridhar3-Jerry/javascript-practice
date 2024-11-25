// function main(a){
//     console.log(lcm(a[0],a[1]));
//     console.log(gcd(a[2],a[3]))
    
// }

// function gcd(c,d){
//     let max=Math.max(c,d)
//     let l=0
//         for(i=1;i<=max;i++){
//             if(c%i==0 && d%i==0){
//                 l=i;
//             }
//         }  
//         return l;
// }
// function lcm(e,f){
//     let z=e*f;
//     return z/gcd(e,f)
// }

// main([12,13,14,15]);






function main(t){
    let emarray=[]
    for(i=0;i<=t.length-1;i++){
        if(t[i]%2==0){
            emarray[emarray.length]=t[i];
          
        }
    } 
    console.log(lcm(emarray[0],emarray[1],emarray[2]));  
}
function gcd(c,d,k){
    let max=Math.max(c,d,k)
    let l=0
        for(i=1;i<=max;i++){
            if(c%i==0 && d%i==0 && k%i==0){
                l=i;
            }
        }  
        return l;
}
function lcm(e,f,g){
    let z=e*f*g;
    console.log(z)
    return z/gcd(e,f,g);
}

main([10,15,18,20,30,43]);







