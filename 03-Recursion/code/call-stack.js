function takeShower(){
    return "Showering!"
}
function eatBreakFast(){
    let meal = cookFood()
    return `Eating ${meal}`
}
function cookFood(){
    let items = ["Oatmeal","Eggs","Protein shake"];
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp(){
    takeShower();
    eatBreakFast();
    console.log("OK ready to go to work");
}
const result = wakeUp();
console.log(result);