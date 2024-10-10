let a=[22,23,24,20,10];
let b=a[0];
let c=[]
for(i=0;i<=a.length;i++){
    if(b>a[i]){
        c=a[i];
    } 
      sp=a.indexOf(c); 
      a=a.splice(c,1);
      console.log(c);

}
