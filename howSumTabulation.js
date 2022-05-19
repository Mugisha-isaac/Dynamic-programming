

const howSumTabulation = (target,numbers)=>{

    let table = Array(target+1).fill(null);
    table[0] = [];
     for(let i=0; i<=target;i++){
        if(table[i]!==null){
            for (let num of numbers){
                table[i+num] =  [...table[i],num];
            }
        }
     }

     return table[target];
   
}

console.log(howSumTabulation(7,[2,3]));
console.log(howSumTabulation(7,[5,3,4,7]));
console.log(howSumTabulation(7,[2,4]));
console.log(howSumTabulation(8,[2,3,5]));
console.log(howSumTabulation(300,[7,14]));