
let pairArr= [];

const cons = (a,b)=>{ 
    pairArr.push(a);
    pairArr.push(b);
    return pairArr
}
 
const car = (arr)=>{
    return arr[0];
}

const cdr = (arr)=>{
    return arr[1];
}

console.log(car(cons(3,4)));
console.log(cdr(cons(3,4)));