const capitalizeFirst = array => {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }

let result = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(result);