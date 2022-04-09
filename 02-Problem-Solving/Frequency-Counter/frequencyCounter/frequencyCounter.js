// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
//Way 1 - O(n^2)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {//check if the sqr of number is present or not
            return false
        }
        //Emptying the second array so that we don't recheck the same values 
        // Array.splice(index,deleteCount)
        arr2.splice(correctIndex,1)
    }
    return true;
}
const result = same([1,2],[1,4])
console.log(result)