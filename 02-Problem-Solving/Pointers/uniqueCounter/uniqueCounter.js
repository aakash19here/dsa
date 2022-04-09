//Time complexity - O(n)
//Space complexity - O(1)
function countUniqueValue(arr){
    let i = 0;
    if(arr.length === 0){
        console.log(0)
        return;
    }
    for(let j = 1;j < arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }  
    } 
    console.log(i + 1)
  
    
}   
//      i
// [1,1,2,3,3,4,5,6,6,7]
//        j

countUniqueValue([1,2,3,3,4,5,6,7,7])