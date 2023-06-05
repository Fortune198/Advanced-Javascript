
// let dog = {
//     dogName: "JavaScript",
//     weight: 2.4,
//     color: "brown",
//     breed: "chihuahua"
// };

// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }


// let dog = new Dog("Jacky", 30, "brown", "labrador");
// let dog2 = new Dog("Sibby", 23, "black", "pit bull");

// console.log(dog);
// console.log(dog2);

// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// let dog2 = new Dog("Bobby", 5, "white", "german");
// let dog3 = new Dog("Snoop", 7.4, "black", "pitbull");


// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname = "Doe") {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }
//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name + ".";
//     }
// }

// let p = new Person("Mike", "Joel");
// console.log("Hi", p.firstname);
// console.log("Hi", p.firstname, p.lastname);


// let p1 = new Person("Maaike");
// console.log("Hi", p1.firstname, p1.lastname);

// let p2 = new Person("Mary", "Slob");
// console.log("Hi", p2.firstname, p2.lastname);

// p1.greet();
// p2.greet();
// console.log(p1.compliment("Maaike", "hairstyle"));


// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }



// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }



// class Motorcycle extends Vehicle {
//     fuel;
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }


// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();



// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
// }


// Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// };

// Person.prototype.favoriteColor = "green";

// let p = new Person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();


