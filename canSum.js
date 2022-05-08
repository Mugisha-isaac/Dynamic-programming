const canSum =(target,numbers)=>{
    if(target === 0) return true;
    if(target <0) return false;

    for(let num of numbers){
        const remainder = target - num;
        if(canSum(remainder, numbers) === true) return true;
    }
    return false;
}

console.log(canSum(7, [2,3])); // false
console.log(canSum(7,[5,3,4,7]));  // true
console.log(canSum(7, [2,4])); // false
console.log(canSum(8, [2,3,5])); // true
console.log(canSum(300,[7,14])); // false