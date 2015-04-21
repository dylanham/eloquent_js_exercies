var arrayToList = function(array) {
  for (var i = array.length -1; i >= 0; i--) {
    if (i === array.length -1) {
      var list = {value: array[i], rest: null};
    } else {
      var list = {value: array[i], rest: list};
    }
  }
  return list
}

var listToArray = function(list) {
  array = []
  for (var hash = list; hash; hash = hash.rest) {
    array.push(hash.value);
  }
  return array
}


console.log(arrayToList([10, 20]));
console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 1));
