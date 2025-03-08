let labelQuestion = document.querySelector(".question");
let buttonSend = document.querySelector(".button-send");
let textMessage = document.querySelector(".message");
let inputAnswer = document.querySelector(".answer");
let iconEraser = document.querySelector(".erase");
let containerAnswer = document.querySelector(".container-answer");

let buttonNext = document.querySelector(".button-next");

let questionAswer = [
  {
    question: "Qual o seu nome?",
    answer: null,
  },
  {
    question: "Quantos anos você tem?",
    answer: null,
  },
  {
    question: "Qual linguagem de programação você está estudando?",
    answer: null,
  },
];

let index = 0;

showQuestion(index);

buttonSend.addEventListener("click", () => {
  resgister();
});

function resgister() {
  let inputAnswer = document.querySelector(".answer");

  if (index < questionAswer.length) {
    questionAswer[index].answer = inputAnswer.value.toupp;
    index++;
  }
  
  if (index == questionAswer.length) {
    hideQuestionAswer();
    showMessageFirst();
    showButtonNext();
  }

  if(index < questionAswer.length){
    showQuestion(index);
  }
  
  cleanInput();
  disableButtonRegister();
  disableButtonRegister();
}

function showQuestion(index) {
  console.log(questionAswer)
  labelQuestion.innerHTML = questionAswer[index].question;
}
function disableButtonRegister() {
  buttonSend.classList.remove("button-send--active");
  buttonSend.setAttribute("disabled", "true");
}

inputAnswer.setAttribute(
  "pattern",
  "^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$"
);

function hideQuestionAswer() {
  labelQuestion.style.display = "none";
  containerAnswer.style.display = "none";
}

inputAnswer.focus();

function cleanInput() {
  inputAnswer.value = "";
  inputAnswer.focus();
  iconEraser.style.display = "none";
}

function enableButtonRegister() {
  buttonSend.classList.add("button-send--active");
  buttonSend.removeAttribute("disabled");
}

function showMessageFirst() {
  textMessage.innerHTML = `Olá ${questionAswer[0].answer}, você tem ${questionAswer[1].answer} anos e já está aprendendo ${questionAswer[2].answer}!`;
}

iconEraser.addEventListener("click", () => {
  cleanInput();
  disableButtonRegister();
});

inputAnswer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    resgister();
  }
});

inputAnswer.addEventListener("input", (event) => {
  if (event.target.value.length > 1) {
    iconEraser.style.display = "block";
    !event.target.validity.patternMismatch
      ? enableButtonRegister()
      : disableButtonRegister();
  } else {
    iconEraser.style.display = "none";
    disableButtonRegister();
  }
});

buttonNext.addEventListener("click", () => {
  console.log("click");
});

function showButtonNext() {
  buttonNext.style.display = "flex";
}

function hideButtonNext() {
  buttonNext.style.display = "none";
}
