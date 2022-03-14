function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
      //total operations = 5n + 2 
    }
    return total;
  }
  //O(f(n))
  //O(n)
  //Number of operations is (eventually) bounded by a multiple of n (say,10n)
  let t1 = performance.now();
  addUpTo(1000000000);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)