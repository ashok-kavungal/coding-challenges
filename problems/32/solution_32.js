//calculate width between two lengths using length *Breadth
//assuming breadth is distance between them and the samllest element value
//is the length of the container formed
//use two pointer method, calculate and save maximum area for each container
//formed

const maxContainer = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let maxArea = 0;

  while (start < end) {
    maxArea = Math.max(maxArea, Math.min(arr[start], arr[end]) * (end - start));
    if (arr[start] < arr[end]) start += 1;
    else end -= 1;
  }
  return maxArea;
};

console.log(maxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
