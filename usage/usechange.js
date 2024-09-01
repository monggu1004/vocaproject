const conversJapan = document.querySelector(".conversation");
const conversKorean = document.querySelector(".words");
let savewordlist = [];
const clickGo = document.querySelector(".know");
const noClick = document.querySelector(".unknow");
const imgContainer = document.querySelector(".imgcontainer");
let japanesePhrases = [
  { japanese: "今日は何をしますか？", korean: "오늘은 무엇을 할 건가요?" },
  { japanese: "昨日はとても寒かったです。", korean: "어제는 매우 추웠습니다." },
  { japanese: "これを見てもいいですか？", korean: "이것을 봐도 될까요?" },
  { japanese: "次の電車はいつ来ますか？", korean: "다음 전철은 언제 오나요?" },
  { japanese: "映画館はどこですか？", korean: "영화관은 어디에 있나요?" },
  { japanese: "これは本当においしいです。", korean: "이거 정말 맛있어요." },
  { japanese: "友達と遊びに行きます。", korean: "친구와 놀러 갑니다." },
  { japanese: "明日は晴れると思います。", korean: "내일은 맑을 것 같아요." },
  { japanese: "宿題を忘れました。", korean: "숙제를 잊어버렸어요." },
  {
    japanese: "その本を貸してもらえますか？",
    korean: "그 책을 빌려줄 수 있나요?",
  },
  { japanese: "電気を消してください。", korean: "불을 꺼주세요." },
  {
    japanese: "日本語を勉強しています。",
    korean: "일본어를 공부하고 있습니다.",
  },
  { japanese: "お茶をください。", korean: "차를 주세요." },
  { japanese: "道に迷いました。", korean: "길을 잃었어요." },
  { japanese: "お手洗いはどこですか？", korean: "화장실은 어디인가요?" },
  {
    japanese: "図書館で本を借りました。",
    korean: "도서관에서 책을 빌렸습니다.",
  },
  { japanese: "昨日は何をしましたか？", korean: "어제는 무엇을 했나요?" },
  { japanese: "駅まで歩いて行きます。", korean: "역까지 걸어갑니다." },
  { japanese: "料理を作るのが好きです。", korean: "요리하는 것을 좋아합니다." },
  { japanese: "一緒にご飯を食べませんか？", korean: "같이 밥 먹지 않을래요?" },
  {
    japanese: "カフェでコーヒーを飲みます。",
    korean: "카페에서 커피를 마십니다.",
  },
  { japanese: "時間がありますか？", korean: "시간 있나요?" },
  { japanese: "明日は休みです。", korean: "내일은 쉽니다." },
  { japanese: "これはあなたの本ですか？", korean: "이것은 당신의 책인가요?" },
  { japanese: "お金を忘れました。", korean: "돈을 잊어버렸어요." },
  { japanese: "映画を見に行きましょう。", korean: "영화 보러 갑시다." },
  { japanese: "寒いので、コートを着ます。", korean: "추워서 코트를 입습니다." },
  { japanese: "私の名前は田中です。", korean: "제 이름은 다나카입니다." },
  { japanese: "部屋を掃除しました。", korean: "방을 청소했습니다." },
  { japanese: "パスポートを見せてください。", korean: "여권을 보여주세요." },
  { japanese: "電話をかけてもいいですか？", korean: "전화해도 될까요?" },
  { japanese: "今日はとても忙しいです。", korean: "오늘은 매우 바쁩니다." },
  { japanese: "部屋を片付けました。", korean: "방을 정리했습니다." },
  { japanese: "猫が好きです。", korean: "고양이를 좋아합니다." },
  { japanese: "夏休みはどうでしたか？", korean: "여름방학은 어땠나요?" },
  { japanese: "友達に手紙を書きます。", korean: "친구에게 편지를 씁니다." },
  { japanese: "仕事が終わりました。", korean: "일이 끝났습니다." },
  {
    japanese: "これを見せてもらえますか？",
    korean: "이것을 보여주실 수 있나요?",
  },
  { japanese: "早く帰りたいです。", korean: "빨리 집에 가고 싶습니다." },
  { japanese: "昨日、何を食べましたか？", korean: "어제 무엇을 먹었나요?" },
  { japanese: "電車に乗ります。", korean: "전철을 탑니다." },
  { japanese: "本を返してください。", korean: "책을 돌려주세요." },
  {
    japanese: "この道をまっすぐ行ってください。",
    korean: "이 길을 쭉 가세요.",
  },
  { japanese: "買い物に行きます。", korean: "쇼핑하러 갑니다." },
  { japanese: "駅前で友達に会います。", korean: "역 앞에서 친구를 만납니다." },
  { japanese: "今日の天気はどうですか？", korean: "오늘 날씨는 어때요?" },
  { japanese: "この部屋は暑いです。", korean: "이 방은 덥습니다." },
  { japanese: "何を飲みたいですか？", korean: "뭐 마시고 싶어요?" },
  { japanese: "図書館に行きますか？", korean: "도서관에 가나요?" },
  { japanese: "週末は何をしますか？", korean: "주말에는 무엇을 할 건가요?" },
  { japanese: "それを取ってください。", korean: "그것을 주세요." },
  {
    japanese: "友達と話すのが楽しいです。",
    korean: "친구와 이야기하는 것이 즐겁습니다.",
  },
  { japanese: "私は学生です。", korean: "저는 학생입니다." },
  { japanese: "新しい靴を買いました。", korean: "새 신발을 샀습니다." },
  { japanese: "今日は疲れました。", korean: "오늘은 피곤합니다." },
  { japanese: "映画が好きです。", korean: "영화를 좋아합니다." },
  { japanese: "これはとても重要です。", korean: "이것은 매우 중요합니다." },
  {
    japanese: "彼はどこに住んでいますか？",
    korean: "그는 어디에 살고 있나요?",
  },
  { japanese: "時間を教えてください。", korean: "시간을 알려주세요." },
  { japanese: "何時に寝ますか？", korean: "몇 시에 자나요?" },
  { japanese: "仕事を探しています。", korean: "일을 찾고 있습니다." },
  { japanese: "彼女はどこにいますか？", korean: "그녀는 어디에 있나요?" },
  { japanese: "今何をしていますか？", korean: "지금 무엇을 하고 있나요?" },
  { japanese: "宿題を手伝ってください。", korean: "숙제를 도와주세요." },
  { japanese: "電話番号を教えてください。", korean: "전화번호를 알려주세요." },
  {
    japanese: "音楽を聴くのが好きです。",
    korean: "음악 듣는 것을 좋아합니다.",
  },
  { japanese: "公園で散歩します。", korean: "공원에서 산책합니다." },
  { japanese: "もう一度お願いします。", korean: "한 번 더 부탁드립니다." },
  { japanese: "昼ごはんを食べましたか？", korean: "점심을 먹었나요?" },
  { japanese: "彼に会ったことがありますか？", korean: "그를 만난 적 있나요?" },
  { japanese: "電車はどこですか？", korean: "전철은 어디에 있나요?" },
  { japanese: "メールを送りました。", korean: "이메일을 보냈습니다." },
  { japanese: "何を話していますか？", korean: "무엇을 이야기하고 있나요?" },
  { japanese: "それは何ですか？", korean: "그것은 무엇인가요?" },
  { japanese: "家に帰ります。", korean: "집에 갑니다." },
  { japanese: "今日は何を食べますか？", korean: "오늘은 무엇을 먹을 건가요?" },
  { japanese: "新しい仕事を始めました。", korean: "새로운 일을 시작했습니다." },
  { japanese: "電車は何時に来ますか？", korean: "전철은 몇 시에 오나요?" },
  { japanese: "部屋を探しています。", korean: "방을 찾고 있습니다." },
];
let savedwords = JSON.parse(localStorage.getItem("saveword")) || [];
const clearbox = document.querySelector(".clear");
const failbox = document.querySelector(".fail");

async function showConversation(event) {
  //전체함수

  let japantext = conversJapan.innerText;
  let koreantext = conversKorean.innerText;
  let savephrases = { japantext, koreantext };
  if (koreantext === "" && japantext === "") {
  } else {
    savedwords.push(savephrases);
  }
  localStorage.setItem("saveword", JSON.stringify(savedwords));

  japanesePhrases = japanesePhrases.filter((phrase) => {
    return !savedwords.some(
      (savedPhrase) =>
        savedPhrase.japantext === phrase.japanese &&
        savedPhrase.koreantext === phrase.korean
    );
  });

  event.preventDefault(); //프리벤트디폴트
  let randomIndex = Math.floor(Math.random() * japanesePhrases.length);
  let randomPhrase = japanesePhrases[randomIndex];
  if (japanesePhrases.length === 0) {
    conversJapan.innerText = "훌륭합니다!";
  }
  conversJapan.innerText = randomPhrase.japanese;
  conversKorean.innerText = randomPhrase.korean;

  // 랜덤 문구 생성
  // let JapanText = conversJapan.innerText;

  // let responseData = await sendData(JapanText); //>response.json으로 변한 객체
  // //responseData는 서버에서 가져온 이미지url
  // addImg(responseData);
}

// async function sendData(JapanText) {
//   let response = await fetch("http://localhost:3000/api/create-img", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ qoute: JapanText }),
//   });
//   //sendData가 url을 올바르게 반환해야 함.
//   const data = await response.json();
//   return data;
// }
// async function addImg(Url) {
//   if (Url) {
//     imgContainer.innerHTML = `<img src="${Url}" alt="create img" class="imgcreate" >`;
//   }
// }

async function showConversationtwo(event) {
  //전체함수
  event.preventDefault(); //프리벤트디폴트
  let randomIndex = Math.floor(Math.random() * japanesePhrases.length);
  let randomPhrase = japanesePhrases[randomIndex];

  conversJapan.innerText = randomPhrase.japanese;
  conversKorean.innerText = randomPhrase.korean;
}
const wordcontainer = document.querySelector(".wordcontainer");

function clearcover() {
  clear.classList.add("coverbutton");
  fail.classList.remove("coverbutton");
}
function failcover() {
  clear.classList.remove("coverbutton");
  fail.classList.add("coverbutton");
  showfailbox();
}
let saveds = JSON.parse(localStorage.getItem("saveword"));

function showclearbox() {
  const exist = document.querySelector(".vocaboxdetail");
  if (exist) {
    exist.remove();
    return;
  }
  const newvocabox = document.createElement("div");
  newvocabox.classList.add("vocaboxdetail");

  wordcontainer.appendChild(newvocabox);
  // let failPhrases = [];
  let savewordlocal = JSON.parse(localStorage.getItem("saveword"));
  // failPhrases = japanesePhrases.filter((phrase) => {
  //   return savedwords.some(
  //     () =>
  //       savedPhrase.japantext === phrase.japanese &&
  //       savedPhrase.koreantext === phrase.korean
  //   );
  // });
  for (let key of savewordlocal) {
    let vocaline = document.createElement("div");
    vocaline.classList.add("vocaline");
    newvocabox.appendChild(vocaline);
    let japanesetext = key.japantext || "";
    let koreantext = key.koreantext || "";
    console.log(koreantext);
    let jvocaline = document.createElement("div");
    jvocaline.classList.add("jvoca");
    vocaline.appendChild(jvocaline);
    jvocaline.innerText = japanesetext;
    let kvocaline = document.createElement("div");
    kvocaline.classList.add("kvoca");
    vocaline.appendChild(kvocaline);
    kvocaline.innerText = koreantext;
  }
}
function showfailbox() {
  const exist = document.querySelector(".vocaboxdetail");
  if (exist) {
    exist.remove();
    return;
  }
  const newvocabox = document.createElement("div");
  newvocabox.classList.add("vocaboxdetail");

  let fails = [];
  wordcontainer.appendChild(newvocabox);
  fails = japanesePhrases.filter((phrase) => {
    return !saveds.some(
      (savedPhrase) =>
        savedPhrase.japantext === phrase.japanese &&
        savedPhrase.koreantext === phrase.korean
    );
  });
  for (let key of fails) {
    let vocaline = document.createElement("div");
    vocaline.classList.add("vocaline");
    newvocabox.appendChild(vocaline);
    let japanesetext = key.japanese || "";
    let koreantext = key.korean || "";
    console.log(koreantext);
    let jvocaline = document.createElement("div");
    jvocaline.classList.add("jvoca");
    vocaline.appendChild(jvocaline);
    jvocaline.innerText = japanesetext;
    let kvocaline = document.createElement("div");
    kvocaline.classList.add("kvoca");
    vocaline.appendChild(kvocaline);
    kvocaline.innerText = koreantext;
  }
}
clickGo.addEventListener("click", showConversation);
noClick.addEventListener("click", showConversationtwo);
clearbox.addEventListener("click", showclearbox);
failbox.addEventListener("click", showfailbox);
clearbox.addEventListener("click", clearcover);
failbox.addEventListener("click", failcover);
