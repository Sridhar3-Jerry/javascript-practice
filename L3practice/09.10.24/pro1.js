// let i,j;
// let b=5;
// let str="";
// for( i=b;i<=1;i--){
//   str+="*";
//   console.log(str)  

// }




function num(n) {
    for (let i = 1; i <= n; i++) {
       let  pattern = "";
       for(k=3;k>=0;k--){
        pattern+=" ";
       }
        for (j = 1; j <= i; j++) {
            pattern += "*"
        } console.log(pattern);
    }
} num(3);