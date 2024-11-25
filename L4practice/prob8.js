// In an array of string, return all the string which start with the letter 'a' (Case insensitive) for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali

arr = ["apple", "Ali", "mango","Brush"];
for(i=0;i<=arr.length-1;i++){
    if(arr[i][0]=='A' || arr[i][0]=='a'){
        console.log(arr[i]);
    }
}