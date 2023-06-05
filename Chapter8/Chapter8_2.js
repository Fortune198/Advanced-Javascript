// let s = "Hello";
// alert(
//     s.concat(" there!")
//         .toUpperCase()
//         .replace("THERE", "you")
//         .concat(" You're amazing!")
// );

// let x = 7;
// alert(Number.isNaN(x));


// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);


// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);


// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

// let arr = ["grapefruit", 4, "hello", 5.6, true, "Fortune"];
// function printStuff(element, index) {
//     console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);


// let arr = ["squirrel", 5, "Tjed", new Date(), true, "Fortune"];
// function checkString(element, index) {
// return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// let arr2 = ["squirrel", 5, "Tjed", new Date(), true, "Fortune"];
// function checkNumber(element, index) {
// return typeof element === "Number";
// }
// let filterArr2 = arr2.filter(checkNumber);
// console.log(filterArr2);5


// console.log(arr.every(checkString));
// console.log(filterArr.every(checkString));

// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);

// console.log(arr);



// function go(e) {
//     eval(e.value);
// }


// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);

// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

// let s1 = "Hello s";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);


// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);


// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);



// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);


// let notFound = searchStr.search("JavaScript");
// console.log(notFound);


// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

// let s2 = "hello hello";
// let new_s2 = s2.replaceAll("hello", "oh");
// console.log(new_s2);

// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_end = encouragement.endsWith("Something else");
// console.log(bool_end);


// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

// let x = 1.23456;
// let newX = x.toFixed(2);
// console.log(x, newX);

// let x = 1.23456;
// let newX = x.toPrecision(4);
// console.log(newX);

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let result = Math.sqrt(64);
// alert(result);

// let result2 = Math.pow(5, 3);
// alert(result2);

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));




