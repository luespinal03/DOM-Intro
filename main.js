// document.querySelector('') allows our javascript to interact with our HTML. Takes string as a parameter, which is going to compare it to the tags we want to access.
// document.querySelector('.className')
// document.querySelector('#idName')
// document.querySelector('tag name')
let child1 = document.querySelector('.child-1');

child1.innerText = 'CHILD-1'; // innerText modifies text
child1.className = 'child-2'; // .className allows us to change the element's class

let child3 = document.querySelector(".child-3")

child3.style.border = '3px solid blue';

child3.style.background = 'aqua';
child3.style.color = 'black';

let image = document.querySelector("img");

image.src = "https://f4.bcbits.com/img/a1442885542_10.jpg"
image.style.height = '300px'

let header1 = document.querySelector("h1")

header1.innerText = "Destroyer of Hello Worlds"
header1.style.background = 'orange'

let child4 = document.querySelector("#child-4");
child4.style.fontSize = "40px"

console.log("Hello World!");
console.log(child1.innerText);
