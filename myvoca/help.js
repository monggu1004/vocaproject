const helpbox = document.querySelector(".helpcontainer");
const triangle = document.querySelector(".space::after");
const questionicon = document.querySelector(".fa-circle-question");

window.addEventListener("load", hiddenhelp);
function showhelp() {
  helpbox.classList.remove("hidden");
  triangle.classList.remove("hidden");
}

function hiddenhelp() {
  helpbox.classList.add("hidden");
  triangle.classList.add("hidden");
}

questionicon.addEventListener("mouseout", hiddenhelp);
questionicon.addEventListener("mouseover", showhelp);
