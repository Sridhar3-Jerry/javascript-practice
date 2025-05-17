function miniMaxSum(arr) {
    // Write your code here
   
    let arr1=[];
    for(let i=0;i<=arr.length-1;i++){
        let sum=0;
        for(let j=0;j<=arr.length-1;j++){
            if(arr[i]!=arr[j]){
                sum+=arr[j];
              
            }
            
        }
        arr1[arr1.length] = sum
    }
    let a = ""
    a = Math.min(...arr1)+" "+Math.max(...arr1);
    console.log(a)
   
}
miniMaxSum([5,5,5,5,5]);
