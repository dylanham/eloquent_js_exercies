var deepEqual = function(value1, value2) {
console.log(value1);
console.log(vaule2);
  if (value1 === value2) {
    return true;
  }
  if (value1 === null || value 2 === null) {
    return false;
  } else if (typeof(value1) === typeof(value2) && typeof(value1) === 'object') {
  }
};

// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
