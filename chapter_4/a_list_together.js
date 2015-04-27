var input = ['a', 'b', 'c'];
// var makeList = function(array) {
//   var list = null;
//   for (var i = input.length -1; i >= 0; i--) {
//     list = {value: input[i], rest: list};
//   }
//   return list;
// };
//
// console.log(makeList(input));
//
// var makeList = function(array) {
//   var list = null;
//   array.reverse()
//   for (var i = 0; i < input.length; i++) {
//     list = {value: input[i], rest: list};
//   };
//   return list;
// };
// //
// // console.log(makeList(input));
// var makeList = function(array) {
//   var i = 0;
//   var list = [].push({value: array[0], rest: list})
//   if (i === array.length) {
//     return list
//   } else {
//     array.shift()
//     return makeList(array);
//   }
// };

console.log(makeList(input));
