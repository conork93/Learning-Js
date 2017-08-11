//Conor Kennedy
//8/11/17

/*
Write a constructor Vector that represents a vector in two-dimensional space
It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vector prototype two methods, plus and minus, that take another vector as a
parameter and return a new vector that has the sum or difference of the two vectors’
(the one in this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length
of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

function vector(x, y){
  this.x = x
  this.y = y
}

vector.prototype.plus = function(other){
  return new vector(this.x + other.x, this.y + other.y)
}

vector.prototype.minus = function(other){
  return new vector(this.x - other.x, this.y - this.x)
}

Object.defineProperty(vector.prototype, "distance", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});
  
console.log(new vector(1, 2).plus(new vector(2, 3)));
console.log(new vector(1, 2).minus(new vector(2, 3)));
console.log(new vector(3, 4).distance);
