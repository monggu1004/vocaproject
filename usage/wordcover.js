const wordall = document.querySelector(".wordall");
const japanese = document.querySelector(".japanese");
const meaning = document.querySelector(".meaning");
const words = document.querySelector(".words");
const conversation = document.querySelector(".conversation");
const rotate = document.querySelector(".fa-arrow-rotate-right");
function coverword() {
  wordall.classList.add("coverbutton");
  japanese.classList.remove("coverbutton");
  meaning.classList.remove("coverbutton");
  words.classList.add("whiteword");
  conversation.classList.add("whiteword");
}
function coverjapanese() {
  japanese.classList.add("coverbutton");
  meaning.classList.remove("coverbutton");
  wordall.classList.remove("coverbutton");

  conversation.classList.add("whiteword");
  words.classList.remove("whiteword");
}
function covermeaning() {
  meaning.classList.add("coverbutton");
  wordall.classList.remove("coverbutton");
  japanese.classList.remove("coverbutton");

  words.classList.add("whiteword");
  conversation.classList.remove("whiteword");
}
function rotateall() {
  wordall.classList.remove("coverbutton");
  japanese.classList.remove("coverbutton");
  meaning.classList.remove("coverbutton");
  words.classList.remove("whiteword");
  conversation.classList.remove("whiteword");
}

wordall.addEventListener("click", coverword);
japanese.addEventListener("click", coverjapanese);
meaning.addEventListener("click", covermeaning);
rotate.addEventListener("click", rotateall);
