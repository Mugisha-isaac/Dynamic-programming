const howSum = (target,numbers) =>{
    let arr = [];
   if(target ===0) return [];
   if(target < 0) return null;
   for(let num of numbers){
       const rem = target - num;
      const res = howSum(rem, numbers);
    if(res !==null){
        return [...res, num];
    }
   }
   return null;
}

console.log(howSum(7,[5,3,4,7]));