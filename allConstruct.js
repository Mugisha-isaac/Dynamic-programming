

const allConstruct = (target,wordBank, memo={})=>{
    if(target in memo) return memo[target]
   if(target === '') return [[]];
   const result = [];
   
   for(let word of wordBank){
       if(target.indexOf(word)===0){
           let suffix = target.slice(word.length);
          let suffixWays = allConstruct(suffix,wordBank,memo);
          let targetWays = suffixWays.map(way=>[word,...way]);
          result.push(...targetWays);
       }
   }

   memo[target] = result;
   return memo[target];
}


console.log(allConstruct("purple",["purp","p","ur","le","purpl"])) 
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaz",["a","aa","aaa","aaaa","aaaaa"]));