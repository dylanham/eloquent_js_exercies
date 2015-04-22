var deepEqual = function(value1, value2) {
  if (value1 === value2) {
    return true;
  }

  if (value1 == null || typeof(value1) !== 'object' ||
      value2 == null || typeof(value2) !== 'object') {
    return false;
  }

  var value1PropArray = [];
  var value2PropArray = [];

  for (var prop in value1) {
    value1PropArray.push(prop);
  }

  for (prop in value2) {
    value2PropArray.push(prop);
  }

  if (value1PropArray.length === value2PropArray.length) {
    for (var i = 0; i < value1PropArray.length; i++) {
      if (value1PropArray[i] === value2PropArray[i]) {
        if (value1[value1PropArray[i]] === value2[value2PropArray[i]]) {
          return true;
        } else {
          return deepEqual(value1[value1PropArray[i]], value2[value2PropArray[i]])
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
