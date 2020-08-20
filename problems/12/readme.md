write a recursive function called faltten which accepts an array of arrays and  returns a new array with all values flattened.



/ flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]</br>
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]</br>
// flatten([[1],[2],[3]]) // [1,2,3]</br>
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3] </br>