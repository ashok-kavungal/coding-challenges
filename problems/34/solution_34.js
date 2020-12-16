const amountTocoins = (amount, coins) => {
  let temp = [];
  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      temp.push(coins[i]);
      amount -= coins[i];
    }
  }
  return temp;
};

console.log(amountTocoins(46, [25, 10, 5, 2, 1])); // [25, 10, 10, 1]
