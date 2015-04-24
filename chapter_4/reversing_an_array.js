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

var x = [1,2,3,4,5];
var temp;
var low;
var high;

low = 0;
high = x.length -1;

temp = x[low];
x[low] = x[high];
x[high] = temp;

low ++;
high--;

temp = x[low];
x[low] = x[high];
x[high] = temp;

console.log(reverseArray([1, 2, 3, 4, 5, 6]))
console.log(reverseArray(["a", "b", "c", "d", "e", "f"]))
console.log(reverseArrayInPlace([1,2,3,4,5,6]))
console.log(reverseArrayInPlace(["a", "b", "c", "d", "e", "f"]))
