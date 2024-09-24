// calculateArea();
// greetUser();

// function calculateArea() {
//  const radius = 5;
// //  let area; error
//  var area = Math.PI * radius * radius;
//  console.log(area);
// }
// function greetUser() {
//  var userName = "John";
//  console.log(userName);
// }


// let count = 1;
// while (count <= 100) {
//  console.log("Counting down: " + count);
//  count = count + 1;
// }



// let temperature = 30;
// if (temperature ==20) {
//     console.log("It's cold outside.");
//    } 
// else {
//     console.log("It's warm outside.");
//    }




//    checkNumber(-5);
//    checkNumber(0);
//    checkNumber(10, 20);function checkNumber(num) {
//      if (num > 0){
//         console.log("Positive");
//      }
//      else if (num < 0) {
//         console.log("Negative");
//      } 
//      else {
//        console.log("Zero");
//      }
//    }
//    console.log("Positive");



//    5. Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.
// function sumNumbers(n){
//     let sum=0;
//     let i=0;
//     while(i<=n){
//         sum+=i;
//         i++;
//     }
//     return sum;
// }
// console.log(sumNumbers(5));




//6. Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.
// function calculateFactorial(n){
//     let sum=1;
//     let i=1;
//     while(i<=n){
//         sum*=i;
//         i++;
//     }
//     return sum;
// }
// console.log(calculateFactorial(5));



//7. Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.

// function printEvenNumbers(n){
//     let b=1;
//     while(b<=n){
//         b++;
//         if(b%2==0){
//             // console.log(b);
//             console.log(b);
//         }
        
//     }

// }
// printEvenNumbers(10);





//8. Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.

// function sumNumbers(n) {
//   let sum = 0;
//   let i = 0;  
//   while (i <= n) {
//     sum += i;
//     i++;
//   }  return sum;
// }
// console.log(sumNumbers(15));




//9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

// If the number is divisible by 3, return "Divisible by 3".
// If the number is divisible by 5, return "Divisible by 5".
// If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
// If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".
// 10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the


// function classifyNumber(n){
//     if(n%3==0 && n%5==0){
//         console.log("Divisible by both 3 and 5");
//     }
//     else if(n%5==0){
//         console.log( "Divisible by 5");
//     }
//     else if(n%3==0){
//         console.log("Divisible by 3");
//     }
//     else{
//         console.log("Not divisible by 3 or 5");
//     }
// }
// classifyNumber(45);





//10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week.
// let day="";
// function getDayName(n){
//     switch (n){
//         case 1:
//             day="Sunday";
//             return day;
//             break;
//         case 2:
//             day="Monday";
//             return day;
//             break;
//         case 3:
//             day="Tuesday";
//             return day;
//             break;  
//         case 4:
//             day="Wednesday";
//             return day;
//             break;
//         case 5:
//             day="Thursday";
//             return day;
//             break;
//         case 6:
//             day="Friday";
//             return day;
//             break;
//         case 7:
//             day="Saturday";
//             return day;
//             break;
//         default:
//             console.log("Enter your value correctly");
//     }
// }
// console.log(getDayName(8));



// 11. Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6
let n=5;
let r=6;
function printMultiplicationTable()