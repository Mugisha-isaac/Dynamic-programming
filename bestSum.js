const bestSum = (target,numbers, memo={}) =>{
   if(target in memo) return memo[target];
   if(target === 0) return [];
   if(target < 0) return null;

   let shoretsCombination = null;

   for(let num of numbers){
       const rem = target-num;
      const res = bestSum(rem, numbers, memo);
      if(res !==null){
          const combination = [...res, num];

          // updating combination
          if( shoretsCombination === null || combination.length < shoretsCombination.length){
              shoretsCombination = combination;
          }
      }
   }

    memo[target] = shoretsCombination;
    return memo[target];
}

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]))
console.log(bestSum(500,[1,2,5,25]));