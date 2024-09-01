let quizcontent;

quizcontent = JSON.parse(localStorage.getItem("arrJK"));

let quizcontentleng;

let randomcontent;
const quizonoff = document.querySelector(".quiz");
const quizpagebox = document.querySelector(".quizpagebox");
const wordlistbox = document.querySelector(".wordlistbox");
const addpagebox = document.querySelector(".addpagebox");
const input = document.querySelector(".input");
const quiz = document.querySelector(".quiz");

const playbutton = document.querySelector(".playbutton");
const stopbutton = document.querySelector(".stopbutton");
let selectkorean;
let selectjapanese;
let japaneseindex;
let koreanindex;

let quizja = document.querySelector(".quizja");
let quizko = document.querySelector(".quizko");
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");
right.disabled = true;
wrong.disabled = true;
playbutton.disabled = false;
stopbutton.disabled = true;

function playquiz() {
  playbutton.disabled = true;
  right.disabled = false;
  wrong.disabled = false;
  stopbutton.disabled = false;
  quizcontentleng = quizcontent.length;
  japaneseindex = Math.floor(Math.random() * quizcontentleng);

  selectjapanese = quizcontent[japaneseindex].japanese;
  quizja.innerText = selectjapanese;

  const minindex = Math.max(0, japaneseindex - 2);
  const maxindex = Math.min(quizcontentleng - 1, japaneseindex + 2);
  koreanindex = Math.floor(Math.random() * (maxindex - minindex)) + minindex;
  selectkorean = quizcontent[koreanindex].korean;
  quizko.innerText = selectkorean;
}
let answerback = document.querySelector(".topbox");
function randomright() {
  // playbutton.disabled = true;
  // right.disabled = false;
  // wrong.disabled = false;
  // stopbutton.disabled = false;
  right.disabled = true;
  wrong.disabled = true;
  let displayedjapanese = quizja.innerText;
  let displayedkorean = quizko.innerText;

  const ok = quizcontent.some(
    (content) =>
      content.japanese === displayedjapanese &&
      content.korean === displayedkorean
  );
  if (ok) {
    answerback.classList.add("blueback");
  } else {
    answerback.classList.add("redback");
  }

  setTimeout(() => {
    answerback.classList.remove("blueback");
    answerback.classList.remove("redback");
    quizcontentleng = quizcontent.length;
    japaneseindex = Math.floor(Math.random() * quizcontentleng);

    selectjapanese = quizcontent[japaneseindex].japanese;
    quizja.innerText = selectjapanese;

    const minindex = Math.max(0, japaneseindex - 2);
    const maxindex = Math.min(quizcontentleng - 1, japaneseindex + 2);
    koreanindex = Math.floor(Math.random() * (maxindex - minindex)) + minindex;
    selectkorean = quizcontent[koreanindex].korean;
    quizko.innerText = selectkorean;

    console.log(selectjapanese);
    console.log(selectkorean);
  }, 300);
  right.disabled = false;
  wrong.disabled = false;
}
function randomwrong() {
  // playbutton.disabled = true;
  // right.disabled = false;
  // wrong.disabled = false;
  // stopbutton.disabled = false;
  right.disabled = true;
  wrong.disabled = true;
  let displayedjapanese = quizja.innerText;
  let displayedkorean = quizko.innerText;

  const ok = quizcontent.some(
    (content) =>
      content.japanese === displayedjapanese &&
      content.korean === displayedkorean
  );
  if (ok) {
    answerback.classList.add("redback");
  } else {
    answerback.classList.add("blueback");
  }

  setTimeout(() => {
    answerback.classList.remove("blueback");
    answerback.classList.remove("redback");
    quizcontentleng = quizcontent.length;
    japaneseindex = Math.floor(Math.random() * quizcontentleng);

    selectjapanese = quizcontent[japaneseindex].japanese;
    quizja.innerText = selectjapanese;

    const minindex = Math.max(0, japaneseindex - 2);
    const maxindex = Math.min(quizcontentleng - 1, japaneseindex + 2);
    koreanindex = Math.floor(Math.random() * (maxindex - minindex)) + minindex;
    selectkorean = quizcontent[koreanindex].korean;
    quizko.innerText = selectkorean;

    console.log(selectjapanese);
    console.log(selectkorean);
  }, 300);
  right.disabled = false;
  wrong.disabled = false;
}
function stopquiz() {
  stopbutton.disabled = true;

  right.disabled = true;
  wrong.disabled = true;
  playbutton.disabled = false;

  quizja.innerText = "CLICK";
  quizko.innerText = "THE PLAY BUTTON!";
}
wordlistbox.removeChild(quizpagebox);
function quizshow() {
  if (wordlistbox.contains(quizpagebox)) {
    wordlistbox.removeChild(quizpagebox);
  } else {
    wordlistbox.appendChild(quizpagebox);
  }
}
const vocabutton = document.querySelector(".vocabutton");
const fabook = document.querySelector(".fa-book");
wordlistbox.removeChild(addpagebox);
function vocaoff() {
  wordlistbox.removeChild(addpagebox);
}
function vocaon() {
  if (wordlistbox.contains(addpagebox)) {
    wordlistbox.removeChild(addpagebox);
  } else {
    wordlistbox.appendChild(addpagebox);
  }
}
vocabutton.addEventListener("click", vocaoff);
playbutton.addEventListener("click", playquiz);
right.addEventListener("click", randomright);
wrong.addEventListener("click", randomwrong);
stopbutton.addEventListener("click", stopquiz);
quizonoff.addEventListener("click", quizshow);
fabook.addEventListener("click", vocaon);
