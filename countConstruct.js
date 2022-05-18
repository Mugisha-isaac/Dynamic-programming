const countConstruct = (target, wordBank, memo={})=>{
    let count =0;
    if(target in memo) return memo[target];
    if(target === '') return 1;
    for(let word of wordBank){
        if(target.indexOf(word)===0){
            let suffix = target.slice(word.length);
            let res = countConstruct(suffix,wordBank, memo);
            count = count + res;    

        }
    }

    memo[target] = count;
   return count;
}

console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"]));
console.log(countConstruct("purple", ["purp","p","ur","le","purpl"]));
console.log(countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]))