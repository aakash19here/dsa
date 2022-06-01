//POWER SOLUTION
function power(base,exponent){
    if(exponent === 0) return 1
    return base *  power(base,exponent-1)
}
const result1 = power(2,3)
console.log(result1)

//PRODUCT OF ARRAY
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
const result2 = productOfArray([1,2,3])
console.log(result2)

//FIBBONACCI 
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
const result3 = fib(1)
console.log(result3)