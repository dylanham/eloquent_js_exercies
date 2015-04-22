var fibNum = function(num) {
  var fibnumber = num - 1 + num - 2;
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    return fibNum(num -1) + fibNum(num -2);
  }
}

console.log(fibNum(50));
