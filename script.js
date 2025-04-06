document.addEventListener("DOMContentLoaded", function () {
    let onLoadEl = document.getElementById("onload");
    onLoadEl.innerHTML = "<h1> This is some loaded content<h1>";
})

const directionEl = document.getElementById("direction");

document.addEventListener("keydown", function (event) {
console.log(event);
directionEl.innerText = `The key you pressed is ${event.code}`;});

const buttonEl = document.getElementById("clickMe");
buttonEl.addEventListener("click", function () {
buttonEl.innerText = "You clicked me!";
})

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const button = document.getElementById("randomColorBtn");

button.onclick = function () {
    document.body.style.backgroundColor = getRandomColor();//changes the background color
    button.style.backgroundColor = getRandomColor(); //changes the button color
    button.style.color = getRandomColor(); //changes the button text color
};

function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   }
   
const darkMode = document.getElementById("darkMode");

function function1() {
    document.body.style.backgroundColor = color = "black";
    darkMode.innerText = "Light Mode";
    button.style.backgroundColor = "white";
    document.getElementById("darkMode").onclick = function2;
} //changes background to black

function function2() {
    document.body.style.backgroundColor = color = "white";
    darkMode.innerText = "Dark Mode";
    directionEl.style = "black";
    document.getElementById("darkMode").onclick = function1;
} //changes background back to white

