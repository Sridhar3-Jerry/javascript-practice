// 1. Write a program to check if the character is a vowel, print "The character is a vowel." If the character is a consonant, print "The character is a consonant." Make sure to handle both upper and lower case letters. A vowel is a character which is any of letters a, e, i, o, u. Any letter which is a not a vowel is considered a consonant.






// 2. Given three numbers a, b, c print the maximum number amongst the three.
// a =10, b = 30, c = 5
// print 30
// let a=10,b=30,c=5;
// if(a>b && a>c){
//     console.log(a);
// }
// else if(b>a && b>c){
//     console.log(b);
// }
// else{
//     console.log(c)
// }


// 3. Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term
// if n = 4, print the first 4 odd numbers 1 3 5 7

let n=5;
let a=n*2;
for(i=1;i<=a;i++){
    if(i%2!=0){
    console.log(i)
}
}



// 4. If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the total discount over 10 days.
// Day 1: 5%
// Day 2: 7% (5% + 2%)
// Day 3: 9% (7% + 2%)
// ...
// Day 10: Calculate this using a loop.
// Remember, you don't have to store each day's discount. Just keep a running total of the discount percentage. The challenge is to use a single loop to accumulate the total discount percentage over the 10 days.

// let p=5;
// let day=10;
// let sum=0;
// for(i=1;i<=day;i++){
//     p+=2;
// }
// console.log(p-2);




// 5. Complete the program printAllMultiplesOf5Bet(a, b)
// eg, printAllMultiplesOf5Bet(10, 30) in reverse
// 30
// 25
// 20
// 15
// 10

// function printAllMultiplesOf5Bet(a, b){
//     for(i=b;i>=a;i--){
//       if(i%5==0){
//         console.log(i)
//       }
//     }
// }
// printAllMultiplesOf5Bet(10, 30);




