
const allConstructTabulation = (target,wordBank)=>{
    const table = Array(target.length +1).fill();
    table[0] = [];

}


console.log(countConstructTabulation('purple',['purp','p','ur','le','purpl']));
console.log(countConstructTabulation("abcdef",["ab","abc","cd","def","abcd"]));
console.log(countConstructTabulation("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(countConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]))