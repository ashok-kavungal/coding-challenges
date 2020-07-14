const sumZero = arr => {

    let lPtr = 0;
    let rPtr = arr.length - 1;

    while (lPtr < rPtr) {
        //elements in list is sorted
        let sum = arr[lPtr] + arr[rPtr];
        if (sum === 0) {
            return [arr[lPtr], arr[rPtr]]
        } else if (sum < 0) {
            lPtr++;
        } else {
            rPtr--;
        }
    };
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
console.log(sumZero([-5, -4, -3, -2, -1, 0, 1, 2, 3])) // [-3,3]
console.log(sumZero([-2, 0, 1, 2, 3])) //[-2,2]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined