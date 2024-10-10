let a=["name","sri","vajesh","karthik"];
let b=0;
let c=0;
let d=[];
for(i=0;i<a.length;i++){
   b=a[i];
    c=b[0].toUpperCase()+b.slice(1);
//    d[d.length]=c;
    d.push(c);    
}
console.log(d);

// function leapYear(a){

// if((a%4==0 && a%100==1)||(a%400==0)){
//     return `${a}is a leap year`;
// }
// else{
//     return `${a}is not a leap year`;
// }
// }console.log(leapYear(2001));

// function tables(){
//     for(i=1;i<=10;i++){    
//      console.log(`21*${i}=${21*i}`);

//     }
// }tables()




