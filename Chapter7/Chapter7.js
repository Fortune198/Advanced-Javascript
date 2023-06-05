
//Exercise 7.1

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let friend = new Person("Pule", "Molekane");

// console.log("Hi "+ friend.firstname + friend.lastname);

// let friend2 = new Person("Teddy", "Mokgabudi");

// console.log("Hello " + friend2.firstname + friend2.lastname);

// console.log("Hello to both " + friend.firstname + friend.lastname + " and " + friend2.firstname + friend2.lastname);




//Exercise 7.2

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullName() {
//         return this.firstname + " " + this.lastname;
//     }
// }

// let friend1 = new Person("Fortune", "Matshika");
// let friend2 = new Person("Tsholofelo", "Nyanto");

// console.log(friend1.fullName());
// console.log(friend2.fullName());

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// let person1 = new Person("Maaike", "van Putten");
// let person2 = new Person("Laurence", "Svekis");
// console.log(person1.fullname());
// console.log(person2.fullname());


//Exercise 7.3

// class Animal {
//     constructor(species, sound) {
//         this.species = species;
//         this.sounds = sounds;
//     }
//     speak() {
//         console.log(this.species + " " + this.sounds);
//     }
// }
// Animal.prototype.eat = function () {
//     return this.species + " is eating";
// }
// let cat = new Animal("rat", "sqeek");
// let dog = new Animal("duck", "quack");
// cat.speak();
// console.log(dog.eat());
// console.log(dog);



//Project


// class Employee {
//     constructor(first, last, years) {
//         this.first = first;
//         this.last = last;
//         this.years = years;
//     }
// }
// const person1 = new Employee("Laurence", "Svekis", 10);
// const person2 = new Employee("Jane", "Doe", 5);
// const workers = [person1, person2];
// Employee.prototype.details = function () {
//     return this.first + " " + this.last + " has worked here " +
//         this.years + " years";
// }
// workers.forEach((person) => {
//     console.log(person.details());
// });



class Menu {
    #offer1 = 10;
    #offer2 = 20;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal() {
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }
    get total() {
        return this.calTotal();
    }
}
const val1 = new Menu(2, 0);
const val2 = new Menu(1, 3);
const val3 = new Menu(3, 2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);