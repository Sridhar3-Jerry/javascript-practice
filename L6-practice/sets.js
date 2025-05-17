let arr=[3, 4, 1, 5, 1, 9, 3];
let empty=[];
console.log(empty.length)
for(let i=0;i<arr.length;i++){
    let isDuplicate=false;
    for(let j=0;j<=empty.length-1;j++){
        if(arr[i]==empty[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
        empty.push(arr[i]);
    }
}
console.log(empty);
// Add an element in an array, don't add if its already present.
// For eg in an array [5, 10, 3, 11, 18], if we add 3 it should allow as the element is already there.
function addElement(arr , add){
    let isDuplicate =false;
    for(let i=0;i<arr.length;i++){
        if(add==arr[i]){
            isDuplicate=true;
            console.log("Duplicate element found");
            return ;
        }
    }
    if(!isDuplicate){
        arr.push(add);
    }
console.log(arr);
}
addElement([5, 10, 3, 11, 18] , 3)



function union(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arr1.push(arr2[i]);
        }
    }
    console.log(arr1);
}
union([3, 1, 5, 7, 8], [5, 1, 8, 10, 11]);




function intersection(arr1,arr2){
    let empty=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] ==arr2[j]){
                empty.push(arr1[i]);
            }
        }
    }
console.log(empty);
}intersection([3, 1, 5, 7, 8],[5, 1, 8, 10, 11]);