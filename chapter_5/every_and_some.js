var every = function(array, predicate) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      results.push(true);
    } else {
      return false;
    }
  }
  return true;
};

console.log(every([NaN, NaN, NaN], isNaN) + ' This is the first iteration of fnEvery');
// → true
console.log(every([NaN, NaN, 4], isNaN) + ' This is the first iteration of fnEvery');
// → false

var every = function(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(every([NaN, NaN, NaN], isNaN) + ' This is the second iteration');
// → true
console.log(every([NaN, NaN, 4], isNaN) + ' This is the second iteration');
// → false

var some = function(array, predicate) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return true;
    } else {
      results.push(false);
    }
  }
  return false;
};

console.log(some([NaN, 3, 4], isNaN) + ' This is the first iteration of fnSome');
// → true
console.log(some([2, 3, 4], isNaN) + ' This is the first iteration of fnSome');
// → false

var some = function(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return true;
    }
  }
  return false;
};

console.log(some([NaN, 3, 4], isNaN) + ' This is the second iteration of fnSome');
// → true
console.log(some([2, 3, 4], isNaN) + ' This is the second iteration fnSome');
// → false
