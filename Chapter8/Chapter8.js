//Exercise 8.1

// let string_uri = "How's%20it%20going%3F";
// let dencoded_uri = decodeURIComponent(string_uri);
// console.log(dencoded_uri);

// let string_uri2 = "How's it going?";
// let encoded_uri = encodeURIComponent(string_uri2);
// console.log(encoded_uri);


// let web_req = "http://www.basescripts.com?=Hello World";
// let encodedWeb = encodeURI(web_req);
// console.log(encodedWeb);


//Exercise 8.2

//let people = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
    // "Laurence", "Mike", "Laurence", "Mike"];



// function checkString(element, index) {
//     return typeof element === "string";
// }

// let peopleFiltered = people.filter(checkString);

// console.log(peopleFiltered);


// const arr2 = people.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(arr2);


//Exercise 8.3

// let numArray = [2, 3, 4, 6, 9];

// let numArray2 = numArray.map(function(ele) {
//     return ele * 2;
// });

// console.log(numArray2);

//Exercise 8.4

// let stringArr = "thIs will be capiTalized for each word";

// function letterUpper(string) {
//     string = string.toLowerCase();
//     let newStringArr = [];
//     let words = string.split(" ");
//     words.forEach(word=> {
//         let temp = word.slice(0,1).toUpperCase() + word.slice(1);
//         newStringArr.push(temp);
//     });
//     return newStringArr.join(" ");
// }
// console.log(letterUpper(stringArr))


//Exercise 8.5

// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];
// vowels.forEach((letter, index) => {
//     console.log(letter);
//     val = val.replaceAll(letter, index);
// });
// console.log(val);


//Exercise 8.6

// let Pi = 3.14;

// console.log(Pi);

// console.log(Math.ceil(5.7));

// console.log(Math.floor(5.7));

// console.log(Math.random());

// console.log(Math.floor(Math.random()*10));

// console.log(Math.floor(Math.random()*100)+1);


// console.log(new Date());


//Exercise 8.7

// let future = new Date(2025, 5, 15);
// console.log(future);
// const months = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month - 1]} ${day} ${year}`;
// console.log(myDate);




//Project 

let str = "JavaScript";
function scramble(val) {
    let max = val.length;
    let temp = "";
    for (let i = 0; i < max; i++) {
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length);
        temp += val[index];
        console.log(temp);
        val = val.substr(0, index) + val.substr(index + 1);
        console.log(val);
    }
    return temp;
}
console.log(scramble(str));

const endDate = "Sept 1 2022";
function countdown() {
    const total = Date.parse(endDate) - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const secs = Math.floor((total / 1000) % 60);
    return {
        days,
        hrs,
        mins,
        secs
    };
}
function update() {
    const temp = countdown();
    let output = "";
    for (const property in temp) {
        output += (`${property}: ${temp[property]} `);
    }
    console.log(output);
    setTimeout(update, 1000);
}
update();
