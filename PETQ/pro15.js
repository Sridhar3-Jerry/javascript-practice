let a=[12,12,14,15,14,10];
let b=[];
for(i=0;i<=a.length-1;i++){
  for(j=i+1;j<=a.length-1;j++){
    if(a[i]==a[j]){
        b.push(a[i]);
    }
  }
}
console.log(b);
