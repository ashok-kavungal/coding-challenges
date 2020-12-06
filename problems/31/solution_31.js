//convert array to an object with value-key pairs
//loop througH the array
//calculate ddff = target - elemnt
// if diff exist as a key in obj and not the same element
//return i, value

var twoSum = function (nums, target) {
  const temp = {};
  for (let i = 0; i < nums.length; i++) {
    temp[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in temp && temp[diff] != 1) return [i, temp[diff]];
  }
};
