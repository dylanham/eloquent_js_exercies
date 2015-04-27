// Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
var Vector = function(x, y) {
  this.x = x;
  this.y = y;
};

// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.

Vector.prototype.plus = function(vector) {
  return new Vector (this.x + vector.x, this.y + vector.y)
}

Vector.prototype.minus = function(vector) {
  return new Vector  (this.x - vector.x, this.y - vector.y)
}


//Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y, 2)); }
});

// Your code here.

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// // → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// // → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
