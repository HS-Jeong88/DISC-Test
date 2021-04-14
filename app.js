const discQuestion = [{"a": "절제하는","b": "강력한","c": "꼼꼼한","d": "표현력있는"}, {"a": "개척적인","b": "정확한","c": "흥미진진한","d": "만족스러운"}, {"a": "기꺼이하는","b": "활기있는","c": "대담한","d": "정교한"}, {"a": "논쟁을 좋아하는","b": "회의적인","c": "주저하는","d": "예측할 수 없는"}, {"a": "공손한","b": "사교적인","c": "참을성 있는","d": "무서움을 모르는"}, {"a": "설득력있는","b": "독립심이 강한","c": "논리적인","d": "온화한"}, {"a": "신중한","b": "차분한","c": "결단성있는","d": "파티를 좋아하는"}, {"a": "인기있는","b": "고집있는","c": "완벽주의자","d": "인심좋은"}, {"a": "변화가 많은","b": "수줍음을 타는","c": "느긋한","d": "완고한"}, {"a": "체계적인","b": "낙관적인","c": "의지가 강한","d": "친절한"}, {"a": "엄격한","b": "겸손한","c": "상냥한","d": "말주변이 좋은"}, {"a": "호의적인","b": "빈틈없는","c": "놀기 좋아하는","d": "의지가 강한 "}, {"a": "참신한","b": "모험적인","c": "절제된","d": "신중한"}, {"a": "참는","b": "성실한","c": "공격적인","d": "매력있는"}, {"a": "열정적인","b": "분석적인","c": "동정심이 많은","d": "단호한"}, {"a": "지도력 있는","b": "충동적인","c": "느린","d": "비판적인"}, {"a": "일관성있는","b": "영향력있는","c": "생기 있는","d": "느긋한"}, {"a": "유력한","b": "친절한","c": "독립적인","d": "정돈된"}, {"a": "이상주의적인","b": "평판이 좋은","c": "쾌활한","d": "솔직한"}, {"a": "참을성 없는","b": "진지한","c": "미루는","d": "감성적인"}, {"a": "경쟁심이 있는","b": "자발적인","c": "충성스러운","d": "사려깊은"}, {"a": "희생적인","b": "이해심 많은","c": "설득력 있는","d": "용기 있는"}, {"a": "의존적인","b": "변덕스러운","c": "절제력 있는","d": "밀어붙이는"}, {"a": "포용력 있는","b": "전통적인","c": "사람을 부추기는","d": "이끌어가는"}];
const orderByContents = document.querySelector(".contents");
const orderByContainer = document.querySelector(".container");
const spanLeft = document.querySelector(".left");
const spanMiddle = document.querySelector(".middle");
const spanRight = document.querySelector(".right");

let arrayCounter = [];
let stageCounter = 0;
let lengthCounter = 1;
let dCounter = 0;
let iCounter = 0;
let sCounter = 0;
let cCounter = 0;

function moveBack() {
    stageCounter = stageCounter - 1;
    saveQuestion();
}

function moveNext() {
    stageCounter = stageCounter + 1;
    saveQuestion();
}

function saveQuestion() {
    localStorage.setItem("QUESTIONS", JSON.stringify(arrayCounter));
}

function pasteInPage() {
    let QN = discQuestion[lengthCounter];

    const array = ["a", "b", "c", "d"];

    const labelA = document.createElement("label");
    labelA.for = "button";
    const labelB = document.createElement("label");
    labelB.for = "button";
    const labelC = document.createElement("label");
    labelC.for = "button";
    const labelD = document.createElement("label");
    labelD.for = "button";
    const span = document.createElement("span");
    const lBtn = document.createElement("button");
    const rBtn = document.createElement("button");
    const QA = document.getElementById("selectBtnA");
    QA.value = QN.a;
    QA.textContent = array[0];
    const QB = document.getElementById("selectBtnB");
    QB.value = QN.b;
    QB.textContent = array[1];
    const QC = document.getElementById("selectBtnC");
    QC.value = QN.c;
    QC.textContent = array[2];
    const QD = document.getElementById("selectBtnD");
    QD.value = QN.d;
    QD.textContent = array[3];

    lBtn.innerText = "＜"
    lBtn.addEventListener("click", moveBack);
    rBtn.innerText = "＞"
    rBtn.addEventListener("click", moveNext);
    spanLeft.appendChild(lBtn);
    spanRight.appendChild(rBtn);

    const questionObj = {
        stage: stageCounter,
        length: lengthCounter
    }
    arrayCounter.push(questionObj);
}

function init() {
    console.log(stageCounter);
    console.log(localStorage);

    pasteInPage();
    // console.log();
}
init();
