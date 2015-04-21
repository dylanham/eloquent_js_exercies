// non recursive solution
// var isEven = function(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

 // recursive solution absolute value takes care of negative numbers
var isEven = function(number) {
  number = Math.abs(number)
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}



console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(-1));
console.log(isEven(-2));
console.log(isEven(100));
console.log(isEven(-1001));
