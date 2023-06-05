
// function sayHello() {
//     let you = prompt("What's your name? ");
//     alert("Hello " + you + "!");
// }

// sayHello();

//Exercise 6.1

// function adder(a, b) {
// return a + b;
// }
// const val1 = 10;
// const val2 = 20;
// console.log(adder(val1, val2));
// console.log(adder(20, 30));


//Exercise 6.2

// let randomArr = ["Smelly", "Goofy", "Big", "Small", "Weird"];

// function randomAdj() {
//     let name = prompt("Enter any name: ");
//     let randomGuess = Math.floor(Math.random() * randomArr.length);

//     alert(randomArr[randomGuess] + " " + name);
// }

// randomAdj();


//Exercise 6.3

// let x = 8;

// let y = 9;

// let op = "-";

// function calc(x, op, y) {
//     if (op == "-") {
//         alert(x - y);
//     } else {
//         alert(x + y);
//     }
// }
// calc(8, "-", 9);


//Exercise 6.4

// let emptyArr = [];

// for (i = 0; i > 0; i++) {
//     console.log(val1(i), val2(i))
// }

// const myArr = [];
// for (let x = 0; x < 10; x++) {
//     let val1 = 5 * x;
//     let val2 = x * x;
//     let res = cal(val1, val2, "+");
//     myArr.push(res);
// }
// console.log(myArr);
// function cal(a, b, op) {
//     if (op == "-") {
//         return a - b;
//     } else {
//         return a + b;
//     }
// }


//Exercise 6.5


// let strVal = "1000";

// (function () {
//     let strVal = "50 000";
//     console.log(strVal);
// })
//     ();

// let result = (function () {
//     let result = "1M";
//     console.log(result);
// })
//     ();
// console.log(result);




// let val = "1000";
// (function () {
//     let val = "100";
//     console.log(val);
// })();
// let result = (function () {
//     let val = "Laurence";
//     return val;
// })();
// console.log(result);
// console.log(val);
// (function (val) {
//     console.log(`My name is ${val}`);
// })("Laurence");



//Exercise 6.6


// function checkFun(i) {
//     console.log(i);
//     if (i === 0) {
//         return 1;
//     } else {
//         return i * checkFun(--nr);
//     }

// }

// console.log(checkFun(8));

//Exercise 6.7

// let x = 10;

// function takeArg(y) {
//     console.log(y);
//     if (y < 1) {
//         return;
//     } else {
//         return takeArg(y -1);
//     }
// }

// takeArg(70);


//Exercise 6.8 

// let storeFunc = function outputArg(param1) {
//     consle.log(param1);
// }
// console.log(storeFunc("Hello, I'm an anonymous function."));


// function outputArg(param1) {
//     consle.log(param1);
// }
// console.log(outputArg("Hello, I'm an anonymous function."));


// const test = function (val) {
//     console.log(val);
// }
// test('hello 1');
// function test1(val) {
//     console.log(val);
// }
// test1("hello 2");



//Project


// const main = function counter(i) {
//     console.log(i);
//     if (i < 10) {
//         return counter(i + 1);
//     }
//     return;
// }
// main(0);



// const one = () => console.log('one');
// const two = () => console.log('two');
// const three = () => {
//     console.log('three');
//     one();
//     two();
// }
// const four = () => {
//     console.log('four');
//     setTimeout(one, 0);
//     three();
// }
// four();





