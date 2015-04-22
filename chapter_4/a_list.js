var arrayToList = function(array) {
  for (var i = array.length -1; i >= 0; i--) {
    if (i === array.length -1) {
      var list = {value: array[i], rest: null};
    } else {
      list = {value: array[i], rest: list};
    }
  }
  return list;
};

var listToArray = function(list) {
  var array = [];
  for (var hash = list; hash; hash = hash.rest) {
    array.push(hash.value);
  }
  return array;
};

var prepend = function(number, value) {
  var list = {value: number, rest: value};
  return list;
};

var nth = function(list, number) {
  var nodeCount = 1;
  for (var hash = list; hash; hash = hash.rest) {
    if (nodeCount === number) {
      return hash;
    } else {
      nodeCount++;
    }
  }
};

console.log(arrayToList([10, 20]));
console.log(arrayToList([10, 20, 30]));
console.log(prepend(10, prepend(20, null)));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 1));
