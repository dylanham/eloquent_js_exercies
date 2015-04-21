// while loop solution
var countChar = function(string, character) {
  var results = 0;
  var i = 0;

  while (i < string.length) {
    if (string.charAt(i) === character) {
      results++;
      i++;
    } else {
      i++;
    }
  }
  return results
}

// for loop solution
 var countChar = function(string, character) {
  var results = 0
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      results++;
    }
  }
  return results
}

console.log(countChar('thisBshouldBcountedtwice', 'B'))
console.log(countChar('seven B B B B B B B\'s', 'B'))
