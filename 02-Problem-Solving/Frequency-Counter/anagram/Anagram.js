function validAnagram(first,second){
    if(first.length !== second.length){
        return false;
    }
    const lookup = {};
    for(let i = 0;i < first.length; i++){
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1:lookup[letter] =1 ;
    }
    for(let i = 0; i < second.length;i++){
        let letter = second[i];
        if(!lookup[letter]){
            return false
        } else {
            //cutting the letters we find in the object anagram
            lookup[letter] -= 1;
        }
    }
    return true;
}
const result = validAnagram('anagram','nagaram')
console.log(result)