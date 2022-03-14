function logAtmost5(n){
    for(i =1;i<=Math.min(5,n);i++){
        console.log(i)
    }
}
logAtmost5(2); 
// .min tells minimum number between two
//Time complexity is O(1) because if n grows its going to be constant 