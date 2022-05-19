

const bestSumTabulation = (target,numbers)=>{
      let table = Array(target+1).fill(null);
      table[0] = [];

      for(let i=0;i<= target; i++){
          if(table[i] !==null){
            for(let num of numbers){
                const combination = [...table[i],num];
                if(!table[i+num]||table[i+num].length > combination.length){
                    table[i+num] = combination;
                }
            }
          }
          
      }

      return table[target];
}

console.log(bestSumTabulation(7,[2,3]));
console.log(bestSumTabulation(7,[5,3,4,7]));
console.log(bestSumTabulation(7,[2,4]));
console.log(bestSumTabulation(8,[2,3,5]));
console.log(bestSumTabulation(300,[7,14]));