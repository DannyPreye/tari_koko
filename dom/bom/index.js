// console.log(screen.availHeight);

const container = document.querySelector(".container");
const newElement = document.createElement("div");
newElement.innerHTML = "Hello from js";

newElement.classList.add("new");
container.appendChild(newElement);

// console.log(container);

// console.log(location.href);
const isLoggedIn = false;
// if (!isLoggedIn) {
// location.href = "../form";
// location.assign("../form");
// }

// console.log(location.protocol);

// console.log(history);

// history.forward();

// history.back();

// console.log(navigator);

// alert("Hello This is an alert ");

// function sayHI(name) {
//     alert(`Hello ${name}`);
// }

// const name = prompt("Enter your name");

// sayHI(name);

// const male = confirm("Are you male or female");

// console.log(male);

// setInterval(() => {
//     console.log("Timer is runing");
// }, 1000);

setTimeout(() => {
    console.log("just ran");
}, 3000);
