// non recursive solution
function isEven(number) {
  if (number % 2 === 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}

//  recursive solution absolute value takes care of negative numbers
function isEven(number) {
  number = Math.abs(number)
  if (number === 0) {
    console.log(true);
  } else if (number === 1) {
    console.log(false);
  } else {
    isEven(number - 2);
  }
}

//recursive solution not using absolute value
function isEven(number) {
  var numberIsEven = (number === 0);
  var numberIsOdd = (number === 1);

  if (number > 0) {
    if (numberIsEven) {
      console.log(true);
    } else if (numberIsOdd) {
      console.log(false);
    } else {
      isEven(number - 2);
    }
  } else {
    if (numberIsEven) {
      console.log(true);
    } else if (numberIsOdd) {
      console.log(false);
    } else {
      isEven(number + 2);
    }
  }
}

isEven(5)
isEven(4)
isEven(0)
isEven(1)
isEven(-1)
isEven(-2)
isEven(100)
isEven(-1001)
