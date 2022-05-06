// const   fib =  (n)=>{
//     if (n<=2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(5));

// improved fib function

// memoization


// use object key: arg to fn value will be the return value

const fib = (n,memo = {})=>{
    if(n in memo) return memo[n];
    if(n<=1) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2,memo)
    return memo[n];
  
}

console.log(fib(1000));