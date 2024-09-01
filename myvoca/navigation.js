const navigationbox = document.querySelector(".navigationbox");
const bars = document.querySelector(".fa-bars");

// window.addEventListener("load", hiddennavi);

//  function hiddennavi() {
//   navigationbox.classList.add("hidden");
// }

function shownavi() {
  navigationbox.classList.toggle("navishow");
}

bars.addEventListener("click", shownavi);
