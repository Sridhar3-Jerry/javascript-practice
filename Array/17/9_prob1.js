//Tech Practice : Arrays
//1. Basic Array Creation  
  // Create an array of 5 numbers and print the array.
let a=[1,2,3,4,5];
console.log(a);

//2. Accessing Array Elements  
  // Create an array of 4 strings. Print the 2nd and 4th elements.
  let b=["Red","Green","Yellow","Blue"];
  console.log(b[1]);
  console.log(b[3]);


  //3. Modifying Array Elements  
   //Create an array of 3 elements. Change the 2nd element to "modified" and print the array.
   let c=["Red","Green","Yellow","Blue"];
   c[2]="violet";
   console.log(c);

   //4. Array Length  
   //Write a program to print the length of an array containing 7 elements.
   let d=[1,2,3,4,5,6,7];
   console.log(d.length);


   //5. Iterating with a `for` loop  
   //Write a program that iterates over an array of numbers and prints each element.
   let e=[1,2,3,4,5,6,7];
   for(i=0;i<e.length;i++){
    console.log(e[i]);
   }

   //6. Summing Array Elements  
   //Write a program to sum all elements of an array of numbers and print the result.
   let f=[1,2,3,4,5,6,7];
   let sum=0;
   function sumArray(){
   for(i=0;i<f.length;i++){
    sum+=f[i]
   }
   return sum;
   
}
console.log(sumArray());


//9. Filter Odd Numbers  
   //Create an array of 10 numbers. Write a program to filter out only the odd numbers and print them.
   let g=[1,2,3,4,5,6,7,8,9,10];
    function oddNum(){
        for(i=0;i<g.length;i++){
            let g1=g[i];
            if (g1%2!=0){
                console.log(g1)
            }
        }
    }
    console.log(oddNum());



    //10. Mapping Array to Double Values  
    //Write a program that multiplies each element of an array by 2 using `map()` and prints the new array.
    let h=[1,2,3,4,5,6,7,8,9,10];
    function mulNum(){
        let h1;
        for(i=0;i<h.length;i++){
                h1=2*g[i];
                console.log(h1);
        }
    }
    console.log(mulNum());