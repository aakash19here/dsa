function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i] === target){
            return true;
        }
    }
    return false 
}
const result = linearSearch([1,2,4,9],9)
console.log(result)