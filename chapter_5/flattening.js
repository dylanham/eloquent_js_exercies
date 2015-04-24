// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.
// crazy way to do it with multiple loops.  Runs N X M times.

var arrays = [[1, 2, 3], [4, 5], [6]];
var array2 = [[4,5,7],[11,99,10]]

var flatten = function(arrayOfArrays) {
  var results = [];
  for (var i = 0; i < arrayOfArrays.length; i++) {
    var internalArray = arrayOfArrays[i];
    for (var index = 0; index < internalArray.length; index++) {
      results.push(internalArray[index]);
    }
  }
  return results;
};

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]

var flatten = function(arrayOfArrays) {
  var concatArrays = function(firstArray, allOtherArrays) {
    return firstArray.concat(allOtherArrays)
  }
  return arrayOfArrays.reduce(concatArrays);
};

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
console.log(flatten(array2));
