'use strict';

class Animal {

  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  showHealth() {
    console.log(`My health is ${this.health}`);
  }

  move() {
    console.log(`No action`);
  }
}

class Mammal extends Animal {
  constructor(name, health, animal, action) {
    super(name, health);
    this.animal = animal;
    this.action = action;
  }

  move() {
    console.log(`${this.animal}: I am ${this.action}`);
  }
}

class Cat extends Mammal {

  constructor(name) {
    super(name, 100, "Catty kitty", "Walking");
  }

  sayMew() {
    console.log(`${this.name}: Meeewww`);
  }
}

const cat = new Cat("Snow");
cat.sayName();
cat.showHealth();
cat.move();
cat.sayMew();


class Dog extends Mammal {

  constructor(name) {
    super(name, 200, "Dog", "running");
  }

  sayAf() {
    console.log(`${this.name}: Aaaafff`);
  }
}

const dog = new Dog ("Bobby");
dog.sayName();
dog.showHealth();
dog.move();
dog.sayAf();


// const dgct = Object.assign(Dog.prototype, Cat.prototype, Mammal.prototype, Animal );
// const dgct = new DoggyCat ("SnowBob");
// dgct.sayName();
// dgct.showHealth();
// dgct.move();
// dgct.sayMew();
// dgct.sayAf();
