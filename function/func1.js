1.//print hello world!
function greet(){
    console.log("hello, world!");
}
greet();

2.//getRondomNumber
function getRondomNumber(){
    let a=Math.random();
    console.log(a);
}
getRondomNumber();

3.//
function displayGreeting(name){
    
}

4.//calculate the square
function calculateSquare(a){
    console.log(a**2);
}
calculateSquare(4);

5.//concatenateStrings
function concatenateStrings(a,b){
    console.log(a+b);

}
concatenateStrings("Sri", "dhar");


6.//if
function isAdult(age){
    if (age>=18){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
isAdult(18);

7.//Add two numbers
function addNumbers(d,e){
    let f=d+e;
    console.log(f);
}
addNumbers(10,20);
addNumbers(35,80);

8.//Even num or not
function isEven(num){
    if (num%2==0){
        console.log("true and it is Even number ");
    }
    else{
        console.log("false");
    }
}
isEven(40);


9.//compareNumbers
function compareNumbers(x,y){
    if (x==y){
        console.log("The numbers are equal");
    }
    else if(x>y){
        console.log("The First number is greater");
    }
    else{
        console.log("The Second number is greater");
    }
}
compareNumbers(20,3);


let v1= 5;
let v2 = 6;
function add(v1,v2){
    let c = v1+v2;
    // return c;
    // return a+b;
    console.log(c);

}
add(v1,v2);
