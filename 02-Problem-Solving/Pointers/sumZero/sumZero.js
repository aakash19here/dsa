//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Time Complexity - O(N^2)
function sumZero(arr){
    for(i=0;i<arr.length;i++){
        for(j = i + 1 ; j < arr.length;j++){
            if(arr[i] +  arr[j] === 0){
                return [arr[i] , arr[j]];
            }
        }
    }
}
//Time Complexity - O(N)
function sumZeroV2(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left],arr[right]];
        } else if(sum > 0){
            right --;
        } else {
            left ++;
        }
    }
}
const result = sumZeroV2([-2,0,1,3])
console.log(result)