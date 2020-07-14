const  countUniqueValues = arr =>{
    if (arr.length === 0){return 0};
    let m = 0;
    for(let n =1; n<arr.length;n++){
        if(arr[m] !== arr[n]){
            m++;
            arr[m] = arr[n];
        }
    };
    return m+1;
};

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));//7
console.log(countUniqueValues([1,2,3,4,5,6,7,8,9,10,11,12,13]));//13