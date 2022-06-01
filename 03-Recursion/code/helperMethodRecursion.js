function collectOddValues(arr){
    let result = []
    function helper(helperInput){
        if(helperInput.length === 0) return
        if(helperInput[0]%2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}
const result = collectOddValues([0,1,2,4,5,6,9,7,2,4,5,6,2,1,2,99,101])
console.log(result)

//Way 2 
function collectOddValues2(arr){
    let newArr = []
    if(arr.length === 0) return newArr
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues2(arr.slice(1)))
    return newArr;
}

const result1 = collectOddValues2([4,5,56,43,53342,5])
console.log(result1)