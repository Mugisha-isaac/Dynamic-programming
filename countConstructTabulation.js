
const countConstructTabulation = (target,wordBank)=>{
   const table = Array(target.length +1).fill(0)
   table[0] = 1;

   for(let i=0;i<= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i,i+word.length) === word){
                table[i+word.length] += table[i];
            }
        }
   }

   return table[target.length]
}

console.log(countConstructTabulation('purple',['purp','p','ur','le','purpl']));
console.log(countConstructTabulation("abcdef",["ab","abc","cd","def","abcd"]));
console.log(countConstructTabulation("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(countConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]))