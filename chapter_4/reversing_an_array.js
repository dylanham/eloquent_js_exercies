solution one
function reverseArray(array) {
  var results = [];
  for (var i = array.length -1; i >= 0; i--) {
    results.push(array[i])
  }
  return results
}

function reverseArray(array) {
  var results = [];
  for (var i = 0; i < array.length; i ++) {
    results.push(array[i])
  }
  return results
}

console.log(reverseArray(["A", "B", "C"]));
