//1. Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.
// let train_departures = [10, 15, 7, 20, 5];
// let a=train_departures[0];
// for(i=0;i<=train_departures.length-1;i++){
//     if(train_departures[i]<a){
//         a = train_departures[i];   
//     }
// }
// console.log(a);



// 2.Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.
// let seats = [1, 0, 1, 1, 0, 0, 1, 0];
// for(i=0;i<=seats.length-1;i++){
//     if(seats[i]==1){
//         console.log("The Seats is Booked:"+seats[i]);
//     }
//     else{
//         console.log("The Seats is available:"+seats[i]);
//     }
// }





// 3.Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.
// let soldiers = [120, 300, 450, 180, 150];
// let s=soldiers[0];
// for(i=0;i<=soldiers.length-1;i++){
//     if(soldiers[i]>s){
//         s=soldiers[i];
       
//     }
// }
// console.log(s);





// 4.Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.
// let populations = [50, 60, 70, 80, 90];
// let sum=0;
// let a=0;
// for(i=0;i<populations.length;i++){
//      a+=populations[i];
//     sum=a/populations.length;
// }
// console.log(sum);



// Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.
// let water_levels = [30, 50, 20, 40, 60];
// let a=water_levels[0];
// for(i=0;i<=water_levels.length-1;i++){
//     if(water_levels[i]<a){
//         a=water_levels[i]
//     }
// }
// console.log(a);


//6.Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.
// let days_until_festival = [30, 15, 45, 10, 25];
// let df=days_until_festival[0];
// for(i=0;i<=days_until_festival.length-1;i++){
//     if(days_until_festival[i]<df){
//         df=days_until_festival[i];
//     }
// }
// console.log(df);


// 7.Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.
// let landing_times = [12, 15, 12, 18, 20];
// let lt= landing_times[0];
// let sum=[];
// let a=0;
// for(i=0;i<=landing_times-1;i++){
//     if(landing_times[i]==lt){
//         lt=landing_times[i];
//         sum.push(lt)
//         a=sum.length;
//     }
//     else{
//         console.log("unique time")
//     }
// }
// console.log(`${a}`);


// let landing_times = [12, 15, 12, 18, 20];
// let a=[];
// a=a.push(landing_times[2]);
// console.log(a);



// 8.Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.
// let temperatures = [75, 80, 72, 85, 90];
// let a=temperatures[0];
// for(i=0;i<=temperatures.length-1;i++){
//     if(temperatures[i]>80){
//     console.log(temperatures[i]);
// }
// }



// 9.Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.
// let students_per_route = [45, 55, 30, 60, 40];
// let a=0;
// let b=0;
// for(i=0;i<=students_per_route.length-1;i++){
//     if(students_per_route[i]<=50){
//         a+=1;
//     }
//     else{
//         b+=2;
//     }
// }
// console.log(`Total bus:${a+b}`);



//10.You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.
// let expenses=[100,200,350,400,100,320,110];
// let sum=0;
// function expenses1(){
// for(i=0;i<expenses.length;i++){
//     sum+=expenses[i];
// }
// return sum;
// }
// console.log(expenses1());



// 11.You are given an array of student grades. Write a function that calculates the average grade.
// let student=[80,90,70,80,60];
// let a=0;
// let avg=0;
// for(i=0;i<student.length;i++){
//    a+= student[i];
//    avg=a/student.length;
// }
// console.log(avg);




// 12.You have an array of people ages. Write a function that filters out people who are 18 years old or older.
// let age=[10,20,30,18,25];
// let a=0;
// function calculateMajor(){
// for(i=0;i<age.length;i++){
//     if(age[i]>=18){
//        a++;
      
//     }

// }
// console.log(a)
// }
// calculateMajor();





// 13.You have an array of integers. Write a function that returns the count of the even numbers in the array.
// let d=[10,11,12,13,15,16,17,20];
// let sum2=0;
// function sumOfEven(){
//     for(i=0;i<=d.length-1;i++){
//         if(d[i]%2==0){
//             sum2+=d[i];
//         }
//     }
//     return sum2;
// }
// console.log(sumOfEven());