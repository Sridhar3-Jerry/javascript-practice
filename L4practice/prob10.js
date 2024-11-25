// Given an array of strings, return the string which has maximum 'a' character present in it.  
// eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it

// let  eg = ["apple", "appeal", "after", "banish"];
// let a="";
// let y=0;

// for(i=0;i<=eg.length-1;i++){
//     let count=0;
//     for(j=0;j<=eg[i].length-1;j++){
//         if(eg[i][j]=="a" || eg[i][j]=="A"){
//             count++;
//         }
//     }
//     if(count>y){
//         y=count;
//         a=eg[i];
//     }

// }

// console.log(a);


// let eg = ["apple", "appeal", "after", "banish"];
// let a = ""; // To store the word with the maximum 'a' characters
// let maxCount = 0; // To store the highest count of 'a' characters found

// for (let i = 0; i < eg.length; i++) {
//     let count = 0; // Reset count for each word

//     for (let j = 0; j < eg[i].length; j++) {
//         if (eg[i][j] === "a" || eg[i][j] === "A") {
//             count++;
//         }
//     }

//     if (count > maxCount) {
//         maxCount = count;
//         a = eg[i]; // Update word with the highest 'a' count
//     }
// }

// console.log(a); // Output the word with the most 'a' characters
