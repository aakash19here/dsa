function double(arr) {
    let newArr = [];
    for(i = 0; i <= arr.length - 1 ; i++){
        newArr.push(arr[i] * 2);
    }
    console.log(newArr);
}
double([10,12])
//The array is directly proportional to the length of the input
//So the time-complexity for this example is O(n)
