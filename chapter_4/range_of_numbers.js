function range(start, end) {
  for (i = start, results = []; i <= end; i++) {
    results.push(i);
  }
  return results;
}

console.log(range(1, 10))

function sum(arrayOfNumbers) {
  for (i = 0, results = 0; i < arrayOfNumbers.length; i++) {
    results += arrayOfNumbers[i];
  }
  return results;
}

console.log(sum(range(1, 10)));
