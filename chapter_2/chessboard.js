var isEven = function(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var boardSize = 8;
var chessboard = "";
for (height = 0; height < boardSize; height++) {
  for (width = 0; width < boardSize; width++) {
    if (isEven(height + width)){
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
