// bubble sort
// function bubbleSort(arr){
//     let swapped;
//     do{
//         swapped = false;
//         for(i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 swapped = true;
//             }
//         }
//     }while(swapped);
//     console.log(arr);
// }
// bubbleSort([4,3,6,1,2]);



//selection sort
// function selectionSort(arr){
//     for(i=0;i<arr.length-1;i++){
//         let min = i;
//         for(j=i+1;j<arr.length;j++){
//             if(arr[min]>arr[j]){
//                 min = j;
//             }
//         }
//         if(min!=i){
//             [arr[min],arr[i]] = [arr[i],arr[min]];
//         }
//     }
//     console.log(arr);
// }
// selectionSort([5,6,2,8,1,9]);



//insertion sort
// function insertionSort(arr){
//     for(i=1;i<=arr.length-1;i++){
//         let temp = arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>temp){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = temp;
//     }
//     console.log(arr);
// }
// insertionSort([2,4,6,8,1,10])




//shell sort
// function shellSort(arr){
//     let lenarr = arr.length;
//     let gap = Math.floor(lenarr/2);
//     while(gap>0){
//         for(i=0;i<lenarr;i++){
//             let temp = arr[i];
//             let j = i;
//             while(j>=gap && arr[j-gap]>temp){
//                 arr[j] = arr[j-gap];
//                 j=j-gap;
//             }
//             arr[j] = temp;
//         }
//         console.log(arr.join(','));
//         gap=Math.floor(gap/2);
//     }
//     console.log(arr.join(','));
// }
// shellSort([10,2,3,5,8,1,4]);


// find Duplicate
// function findDuplicate(arr){
//     let empty=[];
//     for(i=0;i<=arr.length-1;i++){
//         let isDuplicate = false;
//         for(j=0;j<=empty.length-1;j++){
//             if(arr[i] == empty[j]){
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             empty[empty.length] = arr[i];
//         }
//     }
//     console.log(empty);
// }
// findDuplicate([1,1,2,2,3,3,4,4])



//find max Number Occrence
// function findNumberOccurence(arr){
//     let a = 0;
//     let maxCount = 0;
//     for(i=0;i<=arr.length-1;i++){
//         let count = 0;
//         for(j=0;j<=arr.length-1;j++){
//             if(arr[i] == arr[j]){
//                 count++;
//             }
//         }
//         if(count>maxCount){
//             maxCount = count;
//             a=arr[i];
//         }
//     }
//     console.log(maxCount,a);
// }
// findNumberOccurence([1,1,1,2,2,2,2,4,4,4,4,4,4,4])



//add the Element
// function addElement(arr,a){
//     for(i=0;i<=arr.length-1;i++){
//         if(a == arr[i]){
//             console.log("cann't add ")
//             return
//         }
//     }
//     arr.push(a);
//     console.log(arr)
// }
// addElement([1,2,3,4,5],6)



//Union of Array
// function unionArr(arr,arr1){
//     for(i=0;i<=arr1.length-1;i++){
//         let isDuplicate = false;
//         for(j=0;j<=arr.length-1;j++){
//            if(arr1[i] == arr[j]){
//                 isDuplicate = true;
//                 break;
//            } 
//         }
//         if(!isDuplicate){
//             arr.push(arr1[i]);
//         }
//     }
//     console.log(arr);
// }
// unionArr([1,2,3,4,5,6],[7,2,8,3,9,10])


// function intersection(arr,arr1){
//     let empty = [];
//     for(i=0;i<=arr1.length-1;i++){
//         for(j=0;j<=arr.length-1;j++){
//             if(arr1[i] == arr[j]){
//                     empty.push(arr1[i])  
//             }
//         }
//     }
//     console.log(removeDuplicate(empty))
// }
// intersection([1,2,3,4,5,6],[7,2,8,3,9,10,2])

// function removeDuplicate(a){
//     let empty1=[];
//     for(i=0;i<=a.length-1;i++){
//         let isDuplicate=false;
//         for(j=0;j<=empty1.length-1;j++){
//             if(a[i]==empty1[j]){
//                 isDuplicate=true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             empty1.push(a[i])
//         }
//     }
//     return empty1;
// }



//Matrix
//Matrix add
// function matrixAdd(a,b){
    
//     if(a.length !== b.length){
//         return;
// }
//     for(i=0;i<=a.length-1;i++){
//         if(a[i].length !== b[i].length){
//             console.log("can't add");
//             return;
//         }
//     }
//     let result =[];
//     for(j=0;j<=a.length-1;j++){
//         let rowA = [];
//         for(k=0;k<=a[j].length-1;k++){
//             rowA[rowA.length] = a[j][k]+a[j][k];
//         }
//         result.push(rowA)
//     }
//     console.log(result)
// }

//  matrixAdd( [
//     [1, 2, 3],
//     [4, 5, 6]
// ],
// [
//     [7, 8, 9],
//     [10, 11, 12]
// ]
//  )




//Matrix Multiple
// function matrixMul(a,b){
//     let rowA=a.length;//3
//     let colA=a[0].length;//
//     let rowB=b.length;
//     let colB=b[0].length;
//     if(colA==rowB){
//         // var result=Array.from({length:rowA},()=> Array(colB).fill(0));
//         // console.log(result);
//         var result=[]
//         for(var s=0;s<rowA;s++){
//             let d=[]
//             for(var z=0;z<colB;z++){
//                 d.push(0)
//             }
//             result.push(d)
//         }
//         for(let i=0;i<rowA;i++){
//            for(let j=0;j<colB;j++){
//             for(let k=0;k<colA;k++){
//                 result[i][j]+=a[i][k]*b[k][j];
//             }
//            }
//         }
//         console.log(result);
//     }
//    else{
//     console.log("not");
//    }
// }
// let a=[[1,2,3]
//      ,[3,4,2]
//      ,[5,6,1]];
// let b=[[1,2,3,4]
//       ,[3,4,5,4],
//        [5,6,5,4]];
// matrixMul(a,b)



function matrixMultiple(a,b){
    let rowA = a.length;
    let colA = a[0].length;
    let rowB = b.length;
    let colB = b[0].length;
    if(colA == rowB){
        let result = Array.from({length:rowA},()=> Array(colB).fill(0));
        // var result = [];
        for(i = 0;i < rowA;i++){
            let c = [];
            for(j =0;j < colB;j++){
                c.push(0);
            }
            result.push(c);
        }
        
    
    for(k = 0; k < rowA;k++){
       for(l=0;l<colB;l++){
        for(m=0;m<colA;m++){
            result[k][l]+=a[k][m]*b[m][k];
        }
       }
    }
    console.log(result);
}
    else{
        console.log("Not")
        return;
    }
}


function chrono(date) {
    let months = {
        JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6, JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12
    }
    let [month1, date1, year1] = date[0].split('-');
    let [month2, date2, year2] = date[1].split('-');

    date1 = Number(date1);
    date2 = Number(date2);
    year1 = Number(year1);
    year2 = Number(year2);

    if (year1 > year2 || year1 == year2 && months[month1] > months[month2] || year1 == year2 && months[month1] == months[month2] && date1 > date2) {
        console.log(`date 1 is greater than date 2 `);
    }
    else if (year1 < year2 || year1 == year2 && months[month1] < months[month2] || year1 == year2 && months[month1] == months[month2] && date1 < date2) {
        console.log(` date 2 is greater than date 1`);
    } else {
        console.log("Two dates are equal");
    }
}
chrono(['JAN-12-2005', 'JUN-24-2006'])
 

