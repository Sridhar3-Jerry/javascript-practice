// Count Occurrences: Modify the linearSearch function to count the number of times a target element appears in the array.
let arr = [1, 5, 5, 7, 7, 3, 9,3];
let count=0;
let target=3;
for(i=0;i<arr.length;i++){
    if(arr[i]==target){
        count++;
        console.log(i)
    }
   
}
console.log(count);