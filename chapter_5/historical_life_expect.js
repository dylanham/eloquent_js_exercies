var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var findCenturies = function(object) {
  var results = [];
  object.filter(function(person){
    results.push(Math.ceil(person.died / 100));
  });
  return results.sort();
};

var unFilteredArray = findCenturies(ancestry);

var arrayOfCenturies = unFilteredArray.filter(function(elem, position){
  return unFilteredArray.indexOf(elem) === position;
});

var averageAgeMaker = function(centuriesArray, ancestryObject) {
  var coolObject = {};
  for (var i = 0; i < centuriesArray.length; i++) {
    coolObject[centuriesArray[i]] = [];
    ancestryObject.filter(function(person) {
      if (Math.ceil(person.died/100) === centuriesArray[i]) {
        coolObject[centuriesArray[i]].push(person.died - person.born);
      }
    });
    var averagedAge = (average(coolObject[centuriesArray[i]]));
    coolObject[centuriesArray[i]] = averagedAge;
  }
  return coolObject;
};

console.log(averageAgeMaker(arrayOfCenturies, ancestry));
