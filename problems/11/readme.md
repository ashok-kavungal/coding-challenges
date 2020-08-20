write a recursive function which accepts an array and a callback. The funtion returns true if a single value in the array returns true when passed to the callback. Otherwise return false.</br>

// const isOdd = val => val % 2 !== 0;</br>

// someRecursive([1,2,3,4], isOdd) // true </br>
// someRecursive([4,6,8,9], isOdd) // true </br>
// someRecursive([4,6,8], isOdd) // false </br>
// someRecursive([4,6,8], val => val > 10); // false </br>