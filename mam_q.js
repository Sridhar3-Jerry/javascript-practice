let a=1234567;
let sum=0;
while(a>0){
    let b=a%10;
    sum+=b;
    a=Math.trunc(a/10);   
}
console.log(sum);


let a1=0;
function digitSum(num){
    while(num>0){
        let b1=num%10
        a1+=b1;
        num=Math.trunc(num/10);
    }
    return a1;
}
console.log(digitSum(1234567));




//6. Print the first power of 5 that is greater than 10000.
let c=5;
for(i=1;i>10000;i++){
    a2=c**i
    if(a2>10000)
        console.log(a2);
}




let people=["sri","karthi","sudhan"]
let g=people.length;
people.unshift(g);
console.log(people);


let z=2800
if(z%4==0 && z%400==0 || z%100!=0){
    console.log("Y");
}
else {
    console.log("N");
}


let a7=1234567;
let b=a7.toString();
let c7=b.split('');
let d8=c7.length;
console.log(d8);
console.log(b);
console.log(c7);
console.log(a7);


function findElement(cities) {
    // Write your code here
    let a=cities.indexOf("you");
    let b=cities.length-1;
    if(a>=b){
        console.log("Found");
    }
    else{
        console.log("not Found");
    }
  }
  console.log(findElement(["delhi","Chennai","kkk"]));