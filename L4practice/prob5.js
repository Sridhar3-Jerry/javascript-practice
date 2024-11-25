// let arr=[[1,2,3],[3,5,9],[7,4,9]];
// target=4;
// for(i=0;i<=arr.length-1;i++){
//     for(j=0;j<=arr[i].length-1;j++){
//         if(arr[i][j]==target){
//             console.log(arr.indexOf(arr[i]),arr[i].indexOf(arr[i][j]));
            
//         }
//     }
// }

// let arr1=[[1,2,3],[3,5,9,[1,12,3]],[7,4,9]];
// target1=12;

fetch("")
.then(reso =>reso.json())
.then(data=>{
for(const e of data){
    const diva=document.createElement("div")
    diva.className="sri"
    diva.innerHTML=`
    <strong>Nmae:</strong>${e.name}<br>
    <strong>Nmae:</strong>
   <strong>Nmae:</strong>
    <strong>Nmae:</strong>
    <strong>Nmae:</strong>
    <strong>Nmae:</strong>
    
    `

}
});

