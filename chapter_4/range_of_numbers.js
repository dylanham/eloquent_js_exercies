function range(start, end, step) {
  for (i = start, results = []; i <= end;) {
    results.push(i);
    if (step != null) {
      i += step
    } else {
      i++;
    }
  }
  return results;
}

console.log(range(1, 10, 3))

function sum(arrayOfNumbers) {
  for (i = 0, results = 0; i < arrayOfNumbers.length; i++) {
    results += arrayOfNumbers[i];
  }
  return results;
}

console.log(sum(range(1, 10)));
