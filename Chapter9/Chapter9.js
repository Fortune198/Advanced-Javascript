
//Exercise 9.3

// const output = document.querySelector('.output');
// output.textContent = "Hello World";
// output.classList.add("red");
// output.id = "tester";
// output.style.backgroundColor = "red";
// console.log(document.URL);
// output.textContent = document.URL;


//Projects

const output = document.querySelector(".output");
const mainList = output.querySelector("ul");
mainList.id = "mainList";
console.log(mainList);

const eles = document.querySelectorAll("div");
for (let x = 0; x < eles.length; x++) {
    console.log(eles[x].tagName);
    eles[x].id = "id" + (x + 1);
    if (x % 2) {
        eles[x].style.color = "red";
    } else {
        eles[x].style.color = "blue";
    }
}


