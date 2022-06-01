//Using recursion
function factorail(num){
    if(num === 1) return num
    return num * factorail(num - 1)
}
const result = factorail(9);
console.log(result)

//Using for-loop
function factorailForLoop(num){
    let factorail = 1;
    for(let i = 1;i <= num ; i++){
        factorail = factorail * i;
    }
    console.log(factorail)
}
factorailForLoop(9)