// 1. Push Multiple Elements
// Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.
// let colors=["Red","Green"];
// let a=colors.push("Blue","Black");
// console.log(colors);


// 2. Shift Multiple Times
// Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after each removal.
// let a=["Orange","Apple","Graps","Mango","Pappaya"];
// for(i=0;i<=1;i++){
//     a.shift();
//     console.log(a);
// }



// 3. Unshift with Multiple Arguments
// Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning in a single line and print the array.
// let sports=["cricket","tennis"];
//     sports.unshift("Football","Basketball","Hockey");
// console.log(sports);



// 4. Find Non-Existing Element with indexOf()
// Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.
// let b=["computer","laptop","mouse"];
// let c=b.indexOf("laptop");
// console.log(c);



// 5. Split String with Different Delimiter
// Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.
// let d="HTML,CSS,JavaScript";
// let e=d.split(",");
// console.log(e);




// 6. Reverse Order of Array Using pop()
// Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a new array in reverse order. Print the reversed array.
// let f=[1,2,3,4];
// let g=[];
// while(f.length>0){ 
//     g.push(f.pop()); 
// }
// console.log(g);



// 7. Joining Array Elements Without a Separator
// Create an array of 4 fruits. Use join() without any separator to combine the array elements into a single string and print the result.
// let array=["Apple","Graps","Mango","Pappaya"]
// let a=array.join()
// console.log(a);
// let b=a.split(",");
// console.log(b);



// 8. Object with Simple Properties
// Write a program to create an object car with properties make, model, and year. Print the model of the car.
// let car={make:"Honda",model:"model_112",year:2003};
// console.log(car.model);


// 9. Array of Objects (Books)
// Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.
// let book=[{title:"journal_1",author:"a_1"},{title:"journal_2",author:"a_2"}];
// console.log(book[0].title);



// 10. Adding New Property to Objects in an Array  
// You have an array of 4 objects, each representing a car with properties brand and model. Write a program to add a new property year to each object and assign a value, then print the updated array.

//    Example:
//    cars = [
//      { brand: "Tata", model: "Nano" },
//      { brand: "Honda", model: "Civic" }
//    ]
//     Output:
//     cars = [
//      { brand: 'Tata', model: 'Nano' , year: '2009' },
//      { brand: 'Honda', model: 'Civic', year: '2021' }
//    ]

// let cars = [
//     { brand: "Tata", model: "Nano" },
//     { brand: "Honda", model: "Civic" }
//       ];
// for(i=0;i<=cars.length-1;i++){
//     if(i<1){
//         cars[i].year=2009;
//     }
//     else{
//         cars[i].year=2021;
//     }
// }
// console.log(cars);







// 11. Summing Object Property Values in an Array  
//    You have an array of 3 objects, each representing a product with properties name and price. Write a program to calculate and print the total price of all the products in the array.

//    Example:
//    products = [
//      { name: "Laptop", price: 800 },
//      { name: "Phone", price: 500 },
//    ]
//     Output:
//    1300
// let   products = [
//           { name: "Laptop", price: 800 },
//          { name: "Phone", price: 500 },
//     ];
//     let sum=0;
// for(i=0;i<=products.length-1;i++){
//     sum+=products[i].price;
// }
// console.log(sum);




// 12. Finding an Object by Property Value in an Array  
//    You have an array of 5 objects, each representing a student with properties name and grade. Write a program to find and print the name of the student whose grade is "A".

//    Example:
//    students = [
//      { name: "Amar", grade: "A" },
//      { name: "Akbar", grade: "B" },
//      { name: "Anthony", grade: "A" },
//    ]
//    Output:
//    [ 'Amar', 'Anthony' ]
// let students = [
//       { name: "Amar", grade: "A" },
//       { name: "Akbar", grade: "B" },
//       { name: "Anthony", grade: "A" },
//     ];
// let std="";
// let d=[];
//     for(i=0;i<=students.length-1;i++){
//         if(students[i].grade=="A"){
//             d[d.length]=students[i].name;
         
            
//         }
//     }
//     console.log(d);