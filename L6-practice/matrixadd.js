function matrixAddition(matrixA, matrixB) { 
    // Enter your code here
    
    
    if(matrixA.length!=matrixB.length || matrixA==null || matrixB==null){
        console.log("Invalid Arguments");
        return;
    }
    
     if(matrixA.length==0 || matrixB.length==0){
        console.log("Invalid Arguments");
        return;
     }
     for(i=0;i<matrixA.length;i++){
        if(matrixA[i].length!==matrixB[i].length){
            console.log("Invalid Arguments");
            return;
        }
    }
    
    var result=[];
    for(j=0;j<matrixA.length;j++){
        let row = [];
        for(k=0;k<matrixA[j].length;k++){
            row.push(matrixA[j][k]+matrixB[j][k]);
        }
        result.push(row)
    }
    for(l=0;l<result.length;l++){
        console.log(result[l].join(' '))
    }
  
}
matrixAddition([[1,2],[3,4]],[[5,6],[7,8]]);