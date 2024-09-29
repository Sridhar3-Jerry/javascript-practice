// 1.Average of Scores
// Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
// let scores=[90,70,80,95,100];
// let avg=0;
// for(i=0;i<=scores.length-1;i++){
//     avg+=scores[i];
// }
// console.log(avg/scores.length);


// 2.Finding Maximum Score
// You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.
// let scores=[90,70,80,95,100];
// let a=Math.max(...scores);
// console.log(a);



// 3.Number System Conversion
// Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.
// let z=[12.5,25.7,39.6];
// let y=0;
// for(i=0;i<=z.length-1;i++){
//     y=z[i].toString(2);
//     console.log(y)
// }





// 4.Boolean Algebra (AND Operation)
// Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.
// let a=[];
// function booleanAlgebra(array1,array2){
//     if(array1.length==array2.length){
//         for(i=0;i<=array1.length-1;i++){
//             a[i]=array1[i] && array2[i];
//         }
//         return a;
//     }
 
// }
// console.log(booleanAlgebra([true, false, true],[false, true, true]));




// 5.Percentage Increase in Prices
// Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.
// let=0;
// let d=0;
// function increaseInPrice(a,b){
//     for(i=0;i<=a.length-1;i++){
//         c=b[i]-a[i];
//         d=c/a[i]*100;
//         console.log(d+"% increased from old price");
//     }
// }
// increaseInPrice([60,70,80,90],[65,75,85,95]);







// 6.Set Theory (Union of Two Sets)
// Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.
// let set_1=[9,10,11,15];
// let set_2=[10,9,10,15];
// let b=[...new Set([...set_1,...set_2])]
// console.log(b);




// 7.Finding the Mode (Most Frequent Element)
// Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. If there are multiple modes, print any one of them.
 
// I HAVE DOUBT!!!!!


// 8.Modulus Operation for Time Calculation
// Create an array of times (in minutes) that different tasks take to complete. Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators, and save the result in the same array. Print the array.

// let times=[100,120,200];
// let hm=[];
// for(i=0;i<=times.length-1;i++){
//     hm[hm.length]=(Math.trunc(times[i]/60)+"h."+times[i]%60+"m");
// }
// console.log(hm);




//9. Simple Interest Calculation
// Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. Print this array.
// For example: 
// details = [
// { principal : 10000, rateOfInterest : 5, noOfYears: 4},
// { principal : 15000, rateOfInterest : 4, noOfYears: 3},
// ]
// Output:
// [ 2000, 1800 ]

// let details = [
//     { principal : 10000, rateOfInterest : 5, noOfYears: 4},
//     { principal : 15000, rateOfInterest : 4, noOfYears: 3},
//     { principal : 16000, rateOfInterest : 7, noOfYears: 5},
//     { principal : 17000, rateOfInterest : 8, noOfYears: 6},
//     { principal : 18000, rateOfInterest : 9, noOfYears: 7},
//     { principal : 19000, rateOfInterest : 10, noOfYears: 8},
//     { principal : 10000, rateOfInterest : 11, noOfYears: 9},
//     { principal : 11000, rateOfInterest : 12, noOfYears: 10},
//     { principal : 12000, rateOfInterest : 13, noOfYears: 11},
//     { principal : 13000, rateOfInterest : 14, noOfYears: 12},
//      ]
// let SI=[];
// for(i=0;i<=details.length-1;i++){
//     SI[i]=details[i].principal*details[i].rateOfInterest*details[i].noOfYears/100;
// }
// console.log(SI);





//10. Calculating Total Marks of Students 
// You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. Write a program to calculate the total marks for each student and store them in a new array. Print the new array.
// Example:
// students = [
// { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
// { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
// ]
// Output:
// [ 240, 175 ]

// let students = [
//      { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//      { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//      { subject1Marks: 70, subject2Marks: 51, subject3Marks: 66 },
//      { subject1Marks: 80, subject2Marks: 54, subject3Marks: 67 },
//      { subject1Marks: 90, subject2Marks: 55, subject3Marks: 68 },
//      { subject1Marks: 91, subject2Marks: 59, subject3Marks: 69 },
//      { subject1Marks: 92, subject2Marks: 90, subject3Marks: 70 },
//      { subject1Marks: 63, subject2Marks: 52, subject3Marks: 85 },
//      { subject1Marks: 64, subject2Marks: 67, subject3Marks: 75 },
//      { subject1Marks: 69, subject2Marks: 70, subject3Marks: 95 },
//     ];
// let total=[];
// for(i=0;i<=students.length-1;i++){
//     total[i]=students[i].subject1Marks+students[i].subject2Marks+students[i].subject3Marks;
// }
// console.log(total);


// 11.Calculating Total Monthly Expenses
// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities. Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
// Example:
// expenses = [
// { rent: 1000, groceries: 500, utilities: 200 },
// { rent: 800, groceries: 400, utilities: 150 },
// ]
// Output:
// [ 1700, 1350 ]


// let expenses = [
//      { rent: 1000, groceries: 500, utilities: 200 },
//      { rent: 800, groceries: 400, utilities: 150 },
//      { rent: 900, groceries: 500, utilities: 250 },
//      { rent: 1800, groceries: 600, utilities: 350 },
//      { rent: 2800, groceries: 700, utilities: 450 },
//      { rent: 3800, groceries: 800, utilities: 550 },
//      { rent: 4800, groceries: 900, utilities: 650 },
//      { rent: 5800, groceries: 1000, utilities: 750 },
//      { rent: 6800, groceries: 1100, utilities: 850 },
//      { rent: 7800, groceries: 1200, utilities: 950 },
//      ];
// let te=[];
// for(i=0;i<=expenses.length-1;i++){
//     te[i]=expenses[i].rent+expenses[i].groceries+expenses[i].utilities;
// }
// console.log(te);

