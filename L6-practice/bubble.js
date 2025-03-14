function bubble(a){
    let swapped;
    do{
        swapped=false;
        for(i=0;i<a.length-1;i++){
            if(a[i]>a[i+1]){
                [a[i],a[i+1]] = [a[i+1],a[i]];
                swapped = true;    
                
            }
            
        }
    }while(swapped);
    console.log(a.join(' ')) 
}
bubble([1,4,3,5,6,2]);