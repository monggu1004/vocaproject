const navigationbox = document.querySelector(".navigationbox");
const bars = document.querySelector(".fa-bars");

function shownavi() {
  navigationbox.classList.toggle("navishow");
}

bars.addEventListener("click", shownavi);
