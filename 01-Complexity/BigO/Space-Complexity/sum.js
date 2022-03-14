function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    console.log(total)
}
sum([4,2]);
//O(1) this example has a constant space complexity