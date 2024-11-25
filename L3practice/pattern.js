// PATTERN

// function pattern(a){
//     for(i=a;i>=1;i--){
//         let row="";
//         for(j=i;j>=1;j--){
//             row+=j+" ";
//         }
//         console.log(row);
//     }
// }
// console.log(pattern(5));


// function pattern1(num){
//     for(i=num;i>=1;i--){
//         let row="";
//         for(j=num-i;j>=1;j--){
//             row+=" ";
//         }
//         for(k=1;k<=i;k++){
//             row+=k+" ";
//         }
//         console.log(row);
//     }
  
    

// }
// pattern1(5);


function pattern2(num){
    for(a=1;a<=num;a++){
        let row1="";
        for(b=num-a;b>=1;b--){
            row1+=" ";
        }
        for(c=1;c<=a;c++){
            if(c%3==0 && c%5==0){
                row1+="fizz Buzz"+" ";
            }
            else if(c==5){
                row1+="Buzz"+" ";
            }
            else if(c==3){
                row1+="fizz"+" ";
            }
            else{
                row1+=c+" ";
            } 
        }
        console.log(row1);
    }



    for(i=num;i>=1;i--){
        let row=""
        for(j=num-i;j>=0;j--){
            row+=" ";
        }
        for(k=1;k<=i-1;k++){
            row+=k+" ";
        }
        console.log(row)
    }
}
pattern2(5)



// let n =5;
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n; j++) {
//         if (i === 1 || i === n || j === 1 || j === n) {
//             row += i + ' ';
//         } else {
//             row += '  ';  // Two spaces
//         }
//     }
//     console.log(row);
// }
















// let n=5;
// for(i=1;i<=n;i++){
//     let row="";
//     for(j=1;j<=n;j++){
//         if(i==1 || i==n || j==1 || j==n){
//             row+=i+"  ";
//         }
//         else{
//             row+="   "
//         }
//     }
//     console.log(row);
// }






