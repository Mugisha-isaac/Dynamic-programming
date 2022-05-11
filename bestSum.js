const bestSum = (target,numbers) =>{
   if(target === 0) return [];
   if(target < 0) return null;

   let shoretsCombination = null;

   for(let num of numbers){
       const rem = target-num;
      const res = bestSum(rem, numbers);
      if(res !==null){
          const combination = [...res, num];

          // updating combination
          if( shoretsCombination === null || combination.length < shoretsCombination.length){
              shoretsCombination = combination;
          }
      }
   }

   return shoretsCombination;
}

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]))