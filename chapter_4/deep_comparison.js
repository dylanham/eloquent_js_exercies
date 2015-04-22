var deepEqual = function(value1, value2) {
  if (value1 === value2) {
    return true;
  }
  if (value1 == null || value2 == null ) {
    return false;
  }
  if (typeof(value1) === typeof(value2) && typeof(value1) === 'object') {
    var value1PropCount = 0;
    var value2PropCount = 0;
    for (prop in value1) {
      value1PropCount += 1;
    }
    for (prop in value2) {
      value2PropCount += 1;
    }
    if (value1PropCount === value2PropCount) {
      var propValue1Array = [];
      var propValue2Array = [];
      for (prop in value1) {
        propValue1Array.push(prop);
      }
      for (prop in value2) {
        propValue2Array.push(prop);
      }
      for (var i = 0; i < propValue1Array.length; i++)
        if (propValue1Array[i] === propValue2Array[i]) {
          if (value1[propValue1Array[i]] === value2[propValue2Array[i]]) {
            return true;
          } else {
            return deepEqual(value1[propValue1Array[i]], value2[propValue2Array[i]])
          }
        } else {
          return false;
        }

    } else {
      return false;
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
