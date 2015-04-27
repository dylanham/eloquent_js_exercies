var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var motherChild = ancestry.filter(function(person) {
  if (person.mother != null) {
    return byName[person.mother];
  }
});

var ageDifference = function(object) {
  return object.map(function(person){
    return person.born - byName[person.mother].born;
  });
};

// var ageDifference = function(object){
//   var results = []
//   object.forEach(function(person){
//     results.push(person.born - byName[person.mother].born);
//   });
//   return results;
// };


console.log(average(ageDifference(motherChild)));
// → 31.2
