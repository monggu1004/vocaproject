const searchform = document.querySelector(".searchform");
const naverurl = "https://ja.dict.naver.com/#/search?query=";
function activesearch(event) {
  event.preventDefault();
  const searchinput = document.querySelector(".searchinput").value;
  const searchurl = naverurl + encodeURIComponent(searchinput);

  window.open(searchurl, "_blank");
}

searchform.addEventListener("submit", activesearch);
