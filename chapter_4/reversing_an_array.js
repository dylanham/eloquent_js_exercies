var reverseArray = function(array) {
  var results = [];
  for (var i = array.length -1; i >= 0; i--) {
    results.push(array[i])
  }
  return results
}

var reverseArrayInPlace = function(array) {
  for ( var i = 0; i < Math.floor(array.length/2); i++) {
    var originalElement = array[i];
    var swapElement = array[array.length - 1 - i]
    array[i] = swapElement;
    array[array.length - 1 - i] = originalElement;
  }
  return array
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]))
console.log(reverseArray(["a", "b", "c", "d", "e", "f"]))
console.log(reverseArrayInPlace([1,2,3,4,5,6]))
console.log(reverseArrayInPlace(["a", "b", "c", "d", "e", "f"]))
