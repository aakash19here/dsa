function addUpTo(n) {
    return n * (n + 1) / 2;
}
//O(f(n))
//O(1) -> constant time complexity 
//Always 3 operations - multi,add,div
//This is more effiecient than Addv1
let t1 = performance.now();
  addUpTo(1000000000);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
  