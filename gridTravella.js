const gridTravella = (m,n)=>{
    if(m === 1 && n===1) return 1;
    if(m===0 || n==0) return 0;

    return gridTravella(m-1,n) + gridTravella(m,n-1);
}

console.log(gridTravella(2,3));