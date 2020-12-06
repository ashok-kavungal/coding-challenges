//old school approoch
const fib_old = (n) => {
  if (n <= 2) return 1;
  return fib_old(n - 1) + fib_old(n - 2);
};

//using memoisation
function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  return res;
}

//using tabulation
const fib_tab = (n) => {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

const fib_input = 35; //9227465

let start = new Date();
const fib_old_result = fib_old(fib_input);
let exec_time = new Date() - start;
console.info(
  'Old school method: Result is: ' + fib_old_result + ' ,Execution time: %dms',
  exec_time
);

let start1 = new Date();
const fib_memo_result = fib_memo(fib_input);
let exec_time1 = new Date() - start1;
console.info(
  'Memoization method: Result is: ' +
    fib_memo_result +
    ' ,Execution time: %dms',
  exec_time1
);

let start2 = new Date();
const fib_tab_result = fib_tab(fib_input);
let exec_time2 = new Date() - start2;
console.info(
  'Tabulation method: Result is: ' + fib_tab_result + ' ,Execution time: %dms',
  exec_time2
);
