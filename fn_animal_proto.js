'use strict';

function Animal(name, health) {
  this.name = name;
  this.health = health;
}

Animal.prototype.SayName = function SayName () {
  console.log(`My name is ${this.name}`);
}

Animal.prototype.Move = function Move() {
  console.log(`No action`);
}

function Mammal(name, health, animal, action) {
  Animal.call(this, name, health);
  this.animal = animal;
  this.action = action;
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.Move = function Move() {
  console.log(`${this.animal}: I am ${this.action}`);
}

function Cat(name) {
  Mammal.call(this, name, 100, "Cat", "walking");
}
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.SayMew = function SayMew() {
  console.log(`${this.name}: Meeewww`);
}

function Dog(name) {
  Mammal.call(this, name, 200, "Dog", "running");
}
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.SayAf = function SayAf() {
  console.log(`${this.name}: Aaaff`);
}

const cat = new Cat("Snow");
cat.SayName();
cat.Move();
cat.SayMew();

const dog = new Dog("Bob");
dog.SayName();
dog.Move();
dog.SayAf();


function DoggyCat(name) {
  Mammal.call(this, name, 300, "DoggyCat", "jumping");
}

DoggyCat.prototype = Object.create(Mammal.prototype);
const mixin = {...Cat.prototype, ...Dog.prototype};
Object.keys(mixin).forEach(key => {
  DoggyCat.prototype[key] = mixin[key];
});
DoggyCat.prototype.constructor = DoggyCat;

const dgc = new DoggyCat("Snowbobby");
dgc.SayName();
dgc.SayMew();
dgc.SayAf();
dgc.Move();

