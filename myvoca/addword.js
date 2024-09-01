const formTag = document.querySelector(".form-layout");
const inputClick = document.querySelector(".input2");
const input1 = document.querySelector(".input1");
const input1_1 = document.querySelector(".input1_1");
const japantext = document.querySelector(".japaneseword");
const koreantext = document.querySelector(".koreanmeaning");
const wordallbutton = document.querySelector(".wordall");
const japanesebutton = document.querySelector(".japanese");
const koreanbutton = document.querySelector(".meaning");
const rotate = document.querySelector(".fa-arrow-rotate-right");

const wordbox = document.querySelector(".wordcontainer");
const addpage = document.querySelector(".addpage");
let getwords = JSON.parse(localStorage.getItem("arrJK")) || [];
let words;
let displaywords;

function addLS(event) {
  event.preventDefault();
  const input1text = input1.value;
  const input1_1text = input1_1.value;
  getwords.push({ japanese: input1text, korean: input1_1text });
  localStorage.setItem("arrJK", JSON.stringify(getwords));
  JSON.parse(localStorage.getItem("arrJK"));

  addtext(input1text, input1_1text);

  input1.value = "";
  input1_1.value = "";
}
const js = 0;
function addtext(japanese, korean) {
  const scrollbox = document.createElement("div");
  scrollbox.classList.add("scrollheight");
  const newwordLine = document.createElement("div");
  newwordLine.classList.add("wordline");
  const newJapaneseword = document.createElement("div");
  newJapaneseword.classList.add("japaneseword");
  newJapaneseword.textContent = japanese;
  const newkoreanmeaing = document.createElement("div");
  newkoreanmeaing.classList.add("koreanmeaning");
  newkoreanmeaing.textContent = korean;
  const newwordContainer = document.querySelector(".wordcontainer");
  const wordlinebox = document.createElement("div");
  wordlinebox.classList.add("wordlinebox");
  const deletebox = document.createElement("div");
  deletebox.classList.add("deletebox");
  const deletebutton = document.createElement("button");
  deletebutton.classList.add("deletebutton");
  deletebutton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  newwordContainer.appendChild(scrollbox);
  newwordLine.appendChild(newJapaneseword);
  newwordLine.appendChild(newkoreanmeaing);
  wordlinebox.appendChild(newwordLine);
  newwordContainer.appendChild(wordlinebox);
  deletebox.appendChild(deletebutton);
  wordlinebox.appendChild(deletebox);
  newwordContainer.appendChild(wordlinebox);
  deletebutton.addEventListener("click", () =>
    deleteword(wordlinebox, japanese, korean)
  );
  wordallbutton.addEventListener("click", () => {
    allcover(newJapaneseword, newkoreanmeaing);
  });
  japanesebutton.addEventListener("click", () => {
    japanesecover(newJapaneseword, newkoreanmeaing);
  });
  koreanbutton.addEventListener("click", () => {
    koreancover(newJapaneseword, newkoreanmeaing);
  });
  rotate.addEventListener("click", () => {
    rotatef(newJapaneseword, newkoreanmeaing);
  });
}

function allcover(newj, newk) {
  wordallbutton.classList.add("coverbutton");
  japanesebutton.classList.remove("coverbutton");
  koreanbutton.classList.remove("coverbutton");
  newj.classList.add("whiteword");
  newk.classList.add("whiteword");
}
function japanesecover(newj, newk) {
  wordallbutton.classList.remove("coverbutton");
  japanesebutton.classList.add("coverbutton");
  koreanbutton.classList.remove("coverbutton");
  newk.classList.remove("whiteword");
  newj.classList.add("whiteword");
}
function koreancover(newj, newk) {
  wordallbutton.classList.remove("coverbutton");
  japanesebutton.classList.remove("coverbutton");
  koreanbutton.classList.add("coverbutton");
  newk.classList.add("whiteword");
  newj.classList.remove("whiteword");
}
function rotatef(newj, newk) {
  wordallbutton.classList.remove("coverbutton");
  japanesebutton.classList.remove("coverbutton");
  koreanbutton.classList.remove("coverbutton");
  newj.classList.remove("whiteword");
  newk.classList.remove("whiteword");
}
function deleteword(wordlinebox, japanese, korean) {
  wordbox.removeChild(wordlinebox);

  getwords.splice(japanese, korean);
  getwords = getwords.filter(
    (word) => !(japanese === word.japanese && korean === word.korean)
  );
  localStorage.setItem("arrJK", JSON.stringify(getwords));
}
function showwords() {
  wordbox.innerHTML = "";
  getwords.forEach((word) => {
    addtext(word.japanese, word.korean);
  });
}

window.addEventListener("load", showwords);
formTag.addEventListener("submit", addLS);
