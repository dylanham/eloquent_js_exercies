// Exercise 1 using while loop ch 2. solution 1
var count = 0;
var triangleSymbol = '#';
while (count < 7) {
  console.log(triangleSymbol);
  count ++;
  triangleSymbol += '#';
}

// Exercise 1 using for loop ch 2. solution 2
var triangleSymbol = '#';
for (i = 0; i < 7; i++) {
  console.log(triangleSymbol);
  triangleSymbol += '#';
}

// Exercise 1 using for loop ch2. and length solution 3

for (var triangle = '#'; triangle.length < 8; triangle += '#') {
  console.log(triangle);
}
