function binarySearch(arr,target){
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
        let middle = Math.floor((min + max) / 2);
        let val = arr[middle];
        if(target < val){
            max = middle - 1;
        }
        else if(target > val){
            min = middle + 1;
        }
        else{
            return middle
        }

    }
    return -1;
}
const result = binarySearch([1,2,9],1)
console.log(result)