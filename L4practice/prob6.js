// let arr=[[1,2,3],[3,5,9],[7,4,9]];
// target=4;
// for(i=0;i<=arr.length-1;i++){
//     for(j=0;j<=arr[i].length-1;j++){
//         if(arr[i][j]==target){
//             console.log(arr.indexOf(arr[i]),arr[i].indexOf(arr[i][j]));
            
//         }
//     }
// }

let arr1=[[1,2,3],[3,5,9,[1,12,3]],[7,4,9]];
target1=12;
for(i=0;i<=arr1.length-1;i++){
    for(j=0;j<=arr1[i].length-1;j++){
        if(arr1[i][j].length>0){
            for(k=0;k<=arr1[i][j].length-1;k++){
                if(arr1[i][j][k]==target1){
                    console.log(i,j,k)
                }
            }
        }
    }
}



