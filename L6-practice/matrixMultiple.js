// 


function matrixMultiple(matrixA,matrixB){
    if(matrixA == null || matrixB == null || matrixA.length == 0 || matrixB.length == 0){
        console.log("Invalid Arguments");
        return;
    }
    if(matrixA[0].length !== matrixB.length){
        console.log("Invalid Arguments");
        return;
    }
    for(i =0; i<=matrixA.length-1;i++){
        if(matrixA[i].length !==matrixA[0].length){
            console.log("Invalid Arguments");
            return;
        }
    }
    for(j =0; j<=matrixB.length-1;j++){
        if(matrixB[j].length!==matrixB[0].length){
            console.log("Invalid Arguments");
            return;
        }
    }
    let result =[];
    for(k=0 ; k<matrixA.length; k++){
        let row=[];
        for(l=0; l<matrixB[0].length ; l++){
            let sum = 0;
            for(m=0;m<matrixA[0].length;m++){
                sum+=matrixA[k][m]*matrixB[m][l];
            }
            row.push(sum);
        }
        result.push(row);
    }
    console.log(result);
}

let matrixA = [
    [1, 2, 3],
    [4, 5, 6]
];

let matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

matrixMultiple(matrixA, matrixB);