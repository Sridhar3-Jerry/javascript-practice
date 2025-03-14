// function findDulicate(arr){
//     let maxCount = 0;
//     let a=0;
//     for(i=0;i<=arr.length-1;i++){
//         let count = 0;
//         for(j=0;j<=arr.length-1;j++){
//             if(arr[i]==arr[j]){
//                 count+=1
//             }
           
//         }
//         if(count>maxCount){
//             maxCount = count;
//             a=arr[i];
            
//         }
        
//     }
//     console.log(maxCount,a)
   
// }
// findDulicate([1,1,2,2,3,3,3,3,5,5,4,4,4]);


// function Duplicate(a){
//     let empty = []
//     for(i=0;i<=a.length-1;i++){
//         let isDuplicate = false;
//         for(j=0;j<=empty.length-1;j++){
//             if(a[i]==empty[j]){
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             empty.push(a[i])
//         }
//     }
//     console.log(empty)
// }
// Duplicate([1,1,1,3,4,4,4])




// function union(a,b){
//     for(i=0;i<=b.length-1;i++){
//         let isDuplicate = false;
//         for(j=0;j<=a.length-1;j++){
//             if(b[i]==a[j]){
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             a[a.length] = b[i];
//         }
//     }
//     console.log(a)
// }

// union([1,2,3,4,5,6,7],[2,3,4,5])


// function intersection(a,b){
//     let empty=[]
//     for(i=0;i<=a.length-1;i++){
//         for(j=0;j<=b.length-1;j++){
//             if(a[i]==b[j]){
//                 empty[empty.length] = a[i]
//             }
//         }
//     }
//     console.log(empty);
// }
// intersection([1,2,3,4,5],[1,2,3])



// function addElement(a,add){
//     let isDuplicate = false
//     for(i=0;i<=a.length-1;i++){
//         if(add==a[i]){
//             console.log("Duplicate")
//             isDuplicate = true;
//             break
//         }
//     }
//     if(!isDuplicate){
//         a.push(add);
//     }
//     console.log(a)
// }
// addElement([1,2,3,4],5)