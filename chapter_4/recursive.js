// var palindrome = function(string) {
//   if (string[0] === string[string.length -1]) {
//     var newString = string.slice(1, string.length-1);
//     return string.length === 0 ? true : palindrome(newString);
//   } else {
//     return false;
//   }
// };

// console.log(palindrome('racecar'));
// console.log(palindrome('rabdar'))
// console.log(palindrome('abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba'))


// if (string.length === 0) {
//   return true;
// } else {
//   return palindrome(newString)
// }
var results = [];
var flatten = function(arrayOfArrays) {
  arrayOfArrays.forEach(function(element){
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      results.push(element);
    }
  });
  return results;
};

var arrays = [[1,2,3],[4,5,6],[7,8,9]];
console.log(flatten(arrays));
