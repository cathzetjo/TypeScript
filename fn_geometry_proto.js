'use strict';




function Geometry(x, y) {
  this.x = x;
  this.y = y;
}

Geometry.prototype.Position = function Position() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

Geometry.prototype.Area = function Area() {
  return 'not implemented';
}

function Circle(x, y, radius) {
  Geometry.call(this, x, y);
  this.radius = radius;
}

Circle.prototype = Object.create(Geometry.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.Area = function Area() {
  return Math.PI * this.radius * this.radius;
}

const my = new Circle(1, 2, 10);

console.log(my);
console.log(my.Position());
console.log(my.Area());

function Cylinder(x, y, radius, height) {
  Circle.call(this, x, y, radius);
  this.height = height;
}

Cylinder.prototype = Object.create(Circle.prototype);
Cylinder.prototype.constructor = Cylinder;
Cylinder.prototype.Area = function Area() {
  return Math.PI * Math.pow(this.radius, 2) * this.height;
}

const cyl = new Cylinder(1, 2, 2, 5);
console.log(cyl);
console.log(cyl.Position());
console.log(cyl.Area());
