let a=[10,20,55,95];
let b=[27,78,99,1000,1050];

for(i=0;i<a.length;i++){
    let c=[];
    for(j=0;j<b.length;j++){
        if(a[j]<b[j]){
            console.log("hi")
            c.push(a[i]);
        }
        else{
            c.push(b[i]);}
    }
    console.log(c)
}