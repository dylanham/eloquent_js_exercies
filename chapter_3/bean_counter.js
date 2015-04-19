// while loop solution
function countChar(string, character) {
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
  console.log(results)
}

// for loop solution
function countChar(string, character) {
  for (results = 0, i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      results++;
    }
  }
  console.log(results)
}

countChar('thisBshouldBcountedtwice', 'c')
countChar('seven B B B B B B B\'s', 'v')
