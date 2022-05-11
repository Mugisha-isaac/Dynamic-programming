const howSum = (target,numbers, memo={}) =>{
   if(target in memo) return memo[target]
   if(target ===0) return [];
   if(target < 0) return null;
   for(let num of numbers){
       const rem = target - num;
      const res = howSum(rem, numbers, memo);
    if(res !==null){
        memo[target] = [...res, num];
        return memo[target];
    }
   }
    memo[target] = null;
    return memo[target];
}

console.log(howSum(7, [5,3,4,7]));