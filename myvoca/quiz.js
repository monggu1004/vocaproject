const quizbutton = document.querySelector(".quiz");
const inputbutton = document.querySelector(".input");
const inputbox = document.querySelector(".inputbox");
window.addEventListener("load", firsthidden);

function firsthidden() {
  inputbox.classList.add("inputboxnone");
}
function quizbuttoncolor() {
  quizbutton.classList.toggle("quizclickcolor");
}
function inputbuttoncolor() {
  inputbutton.classList.toggle("inputclickcolor");
  inputbox.classList.toggle("inputboxnone");
}

quizbutton.addEventListener("click", quizbuttoncolor);
inputbutton.addEventListener("click", inputbuttoncolor);
