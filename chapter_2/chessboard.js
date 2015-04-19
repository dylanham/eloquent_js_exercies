function isOdd(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var boardSize = 8;

var checkerboard = "";

for (height = 0; height < boardSize; height++) {
  for (width = 0; width < boardSize; width++) {
    if (isOdd(height + width)){
      checkerboard += " ";
    } else {
      checkerboard += "#";
    }
  }
  checkerboard += "\n";
}

console.log(checkerboard);
