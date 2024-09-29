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
// let n=5;
// let r=6;
// let sum1=1;
// function printMultiplicationTable(n){
//     for(i=r;i>=1;i--){
//         sum1=n*i;
//         console.log(`${n}*${i}=${sum1}`);
//     }
// }
// printMultiplicationTable(n);




//12. Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.
// let n=10;
// let i=1;
// while(i<=n){
//     console.log("The Robot Completes lab"+" "+i);
//     i++;
// }



// 13. A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.
// let botbattery=100;
// while(botbattery>=20){
//     if(botbattery>20){
//         console.log("The robot's battery level:"+" "+botbattery+"%");
//     }
//     else{
//         console.log("The battery level is low:"+" "+botbattery+"%")
//     }
//     botbattery=botbattery-5;
// }



// 14. A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.
// let dn=5;
// switch(dn){
//     case 1:
//         console.log("Robot enters \"NORTH\"");
//         break;
//     case 2:
//         console.log("Robot enters \"SOUTH\"");
//         break;
//     case 3:
//         console.log("Robot enters \"EAST\"");
//         break;
//     case 4:
//         console.log("Robot enters \"WEST\"");
//         break;
//     default:
//         console.log("Enter Correct Value");
    
// }





// 15. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

// let n=1000;
// while(n>=0){
//     if(n!=0){
//         console.log("The flight altitude is:"+""+n+"ft");
//     }
//     else{
//         console.log("The flight is arrived because flight altitude is:"+""+n+"ft");
//     }
//     n=n-10;
// }



// 16. Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.
// let destination="Chennai";
// let rw;
// switch(destination){
//     case "Chennai":
//         console.log("runway: 1");
//         break;
//     case "Mubai":
//         console.log("runway: 2");
//         break;
//     case "Delhi":
//         console.log("runway: 3");
//         break;
//     case "Salem":
//         console.log("runway: 4");  
//         break;   
// }


// 17. Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.
// let airplane=100;

// for (i=1;airplane<=1000;i++){
//     console.log("airplane altitude:"+airplane)
//     airplane=airplane+100;
// }



