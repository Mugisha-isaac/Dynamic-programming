const canConstruct = (target,wordbank, memo={})=>{
   if(target in memo) return memo[target]; 
   if(target === '') return true;
   for(let word of wordbank){
       if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
           if(canConstruct(suffix,wordbank, memo)=== true){
            //    return true;
            memo[target] = true;
            return memo[target];
           }
       }
   }

//    return false;
memo[target] = false;
return memo[target];
}

console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]));
console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]))