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
var i = 0;
var list = null;
for (i = 0; i < input.length; i++) {
  list = {value: input[i], rest: null};
  i++;
  var list2 = {value: input[i], rest: null};
  list['rest'] = list2;
  i++;
  var list3 = {value: input[i], rest: null};
  list2['rest'] = list3;
  i++;
};

console.log(list);
