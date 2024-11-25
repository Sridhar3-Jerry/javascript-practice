// Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"] output is Abraham

arr = ["yam", "Abraham", "Aeter"]
let emp=arr[0];
for(i=0;i<=arr.length-1;i++){
    // let a=arr[i].split('');
    if(arr[i]<emp){
        emp=arr[i];
        console.log(emp);
    }
}


// console.log(emp);
// let b=emp[0];
// for(j=0;j<=emp.length-1;j++){
//     if(emp[j]>b){
//         b=emp[j];
//     }
// }
// console.log(b);