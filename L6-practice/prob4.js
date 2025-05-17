function birthdayCakeCandles(candles) {
    // Write your code here
    let max_count=0;
    for(let i=0;i<=candles.length-1;i++){
        let count=0;
        for(let j=0;j<=candles.length-1;j++){
            if(candles[i]==candles[j]){
                count+=1
            }
        }
        if(max_count<count){
            max_count=count;
        }
    }
    return max_count
}

birthdayCakeCandles([1,1,2,3,3,1]);