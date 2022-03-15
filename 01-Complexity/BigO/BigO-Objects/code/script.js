let instructor = {
    firstName:"Kelly",
    isIstructor: true,
    favouriteNumbers : [1,2,3,4]
}

//O(n) coz as the number of item grows we need to visit every single thing and add it to the array
console.log(Object.keys(instructor)); 

console.log(Object.values(instructor)); 

console.log(Object.entries(instructor)); 

console.log(instructor.hasOwnProperty("firstName")); 