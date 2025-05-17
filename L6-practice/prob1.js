// function plusMinus(arr) {
//     // Write your code here
//     let count=0
//     let count1=0;
//     let count2=0;

//     for(let i=0;i<=arr.length-1;i++){
      
//         if(arr[i]==0){
//             count+=1;
//         }
//         else if(arr[i]<0){
//             count1+=1;
//         }
//         else if(arr[i]>0){
//             count2+=1;
//         }
        
//     }
//     console.log(count2/arr.length);
//     console.log(count1/arr.length);
//     console.log(count/arr.length)

// }
// plusMinus([1,1,0,-1,-1]);


// function staircase(n) {
//     // Write your code here
//     for(i=0;i<=n;i++){
//         let a="";
//         for(j=n-i;j>=0;j--){
//             a+=" "
//         }
//         for(k=0;k<=i;k++){
//             a+="#";
//         }
//         console.log(a)
//     }
// }
// staircase(6)



function miniMaxSum(arr) {
    // Write your code here
    let a=[];
    let sum=0;
    for(i=0;i<=arr.length-1;i++){
        if(arr.indexOf(arr[i])!=i){
            sum+=a[i];
        }
        a[a.length] = sum;
    }
    
    console.log(a);
}
miniMaxSum([1,2,3,4,5]);

