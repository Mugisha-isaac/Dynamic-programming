

const allConstruct = (target,wordBank)=>{
   if(target === '') return [[]];
   const result = [];
   
   for(let word of wordBank){
       if(target.indexOf(word)===0){
           let suffix = target.slice(word.length);
          let suffixWays = allConstruct(suffix,wordBank);
          let targetWays = suffixWays.map(way=>[word,...way]);
          result.push(...targetWays);
       }
   }

   return result;
}

console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaz",["a","aa","aaa","aaaa","aaaaa"]));
console.log(allConstruct("purple",["purp","p","ur","le","purpl"]))