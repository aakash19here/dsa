//Time complexity O(n^2)
function maxSubArraySum(arr,num){
    if(num > arr.length){
        return null;
    }
    var max = -Infinity; //for working with negative numbers in the array 
    for(let i=0; i< arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j<num;j++){
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}
const result = maxSubArraySum([1,2,5,2,8,1,6],4)
console.log(result)
//Time complexity O(n)
function maxSubArraySumV2(arr,num){
    let maxSum = 0
    let tempSum =0
    if(arr.length < num) return null
    for(let i = 0;i<num;i++){
        maxSum += arr[i]; 
    }
    tempSum = maxSum;
    for(let i = num; i <arr.length ; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
}
const result2 = maxSubArraySumV2([1,2,5,2,8,1,6],4)
console.log(result2)