document.addEventListener("DOMContentLoaded", function () {
  const coverjapanese = document.querySelector(".japaneseword");
  const covermeaning = document.querySelector(".koreanmeaning");
  const coverall = document.querySelector(".wordall");
  const japanese = document.querySelector(".japanese");
  const korean = document.querySelector(".meaning");

  function allcover() {
    coverall.classList.add("coverbutton");
    coverjapanese.classList.add("whiteword");
    covermeaning.classList.add("whiteword");
    japanese.classList.remove("coverbutton");
    korean.classList.remove("coverbutton");
  }
  function japanesecover() {
    coverall.classList.remove("coverbutton");
    coverjapanese.classList.add("whiteword");
    covermeaning.classList.remove("whiteword");
    japanese.classList.add("coverbutton");
    korean.classList.remove("coverbutton");
  }
  function meaningcover() {
    coverall.classList.remove("coverbutton");
    coverjapanese.classList.remove("coverbutton");
    covermeaning.classList.add("coverbutton");
    japanese.classList.remove("whiteword");
    meaning.classList.add("whiteword");
  }
  function rotateall() {
    covermeaning.classList.remove("coverbutton");
    coverjapanese.classList.remove("coverbutton");
    coverall.classList.remove("coverbutton");
    japanese.classList.remove("whiteword");
    korean.classList.remove("whiteword");
  }
  coverall.addEventListener("click", allcover);
  japanese.addEventListener("click", japanesecover);
  korean.addEventListener("click", meaningcover);
});
