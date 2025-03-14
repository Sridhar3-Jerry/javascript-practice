function pattern(n){
    let count=1;
    for(i=1;i<=n;i++){
        let a ="";
        for(k=1;k<=i;k++){
            a+=count+" ";
            count++;
        }
        console.log(a);
        }
}
pattern(3);