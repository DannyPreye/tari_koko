const container = document.getElementById("container");
const redPar = document.getElementsByClassName("red");
const p = document.getElementsByTagName("p");
const query = document.querySelector("#container+p");
const queryAll = document.querySelectorAll("#container~p");
// const body = document.querySelector("body");
// const videoEle = document.querySelector("video");

console.log(body);

container.innerHTML = "<b>hello</b>";
// container.style.background = "red";
container.style.color = "white";
// container.className = "koko";
container.classList.add("koko");
container.classList.remove("html");
// container.id = "blue";
// videoEle.src = "../videos/2.mp4";
// videoEle.controls = true;

// container.style.borderRadius = "50%";
// container.innerText = "<b>hello</b>";

// redPar[0].innerText = "green";
// container.innerHTML = "Hello from js";
// container.style.color = "red";
// container.style.backgroundColor = "blue";

// for (let i = 0; i < redPar.length; i++) {
//     redPar[i].innerHTML = "greem";
//     redPar[i].style.color = "Red ";
// }

// const colors = ["red", "blue", "purple", "yellow"];
// // setInterval()

// const sayHi = (name) => {
//     console.log("hello " + name);
// };

// const divideNum = (num1, num2) => {
//     console.log(num1 / num2);
// };

// sayHi("Tari");
