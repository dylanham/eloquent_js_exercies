function minimum(number1, number2) {
  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
}

console.log(minimum(3, 5))
console.log(minimum(5, 4))
console.log(minimum(0, 5))
console.log(minimum(5, -1))
console.log(minimum(8, 8))
