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
    type: "text",
    pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$"
  },
  {
    question: "Quantos anos você tem?",
    answer: null,
    type: "text",
    pattern: "^(150|1[0-4][0-9]|[1-9][0-9]|[0-9])$"
  },
  {
    question: "Qual linguagem de programação você está estudando?",
    answer: null,
    type: "text",
    pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$"
  },
];

let index = 0;

inputAnswer.setAttribute(
  "pattern",
  "^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$"
);

function resgister() {
  let inputAnswer = document.querySelector(".answer");

  if (index < questionAswer.length) {
    questionAswer[index].answer = inputAnswer.value;
    index++;
  }
  
  if (index == questionAswer.length) {
    hideQuestionAswer();
    
    mesage = "";
    if(index == 3){
      mesage = `Olá ${questionAswer[0].answer}, você tem ${questionAswer[1].answer} anos e já está aprendendo ${questionAswer[2].answer}!`
      showButtonNext();
    }
    if(index == 4){
      mesage = questionAswer[3].answer == 1 ?
      `Muito bom! Continue estudando e você terá muito sucesso.` :
      `Ahh que pena... Já tentou aprender outras linguagens?`
    }
    showMessageFirst(mesage);
  }
  
  if(index < questionAswer.length){
    showQuestion(index);
    inputAnswer.setAttribute("type", questionAswer[index].type)
    inputAnswer.setAttribute("pattern", questionAswer[index].pattern)
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

function hideQuestionAswer() {
  labelQuestion.style.display = "none";
  containerAnswer.style.display = "none";
}

function showQuestionAswer() {
  labelQuestion.style.display = "flex";
  containerAnswer.style.display = "flex";
}

function cleanInput() {
  inputAnswer.value = "";
  inputAnswer.focus();
  iconEraser.style.display = "none";
}

function enableButtonRegister() {
  buttonSend.classList.add("button-send--active");
  buttonSend.removeAttribute("disabled");
}

function showMessageFirst(mesage) {
  textMessage.style.display = "block";
  textMessage.innerHTML = mesage;
}

function hideMessageFirst() {
  textMessage.style.display = "none";
}

function showButtonNext() {
  buttonNext.style.display = "flex";
}

function hideButtonNext() {
  buttonNext.style.display = "none";
}

function hideButtonNext() {
  buttonNext.style.display = "none";
}


iconEraser.addEventListener("click", () => {
  cleanInput();
  disableButtonRegister();
});

inputAnswer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.target.value.length >= 1 && !event.target.validity.patternMismatch){
      resgister();
    }   
  }
});

inputAnswer.addEventListener("input", (event) => {
  if (event.target.value.length >= 1) {
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
  hideButtonNext()
  hideMessageFirst()
  questionAswer.push(
    { 
      question: `Você gosta de estudar ${questionAswer[2].answer}? Responda com o número 1 para SIM ou 2 para NÃO.`,
      answer: null,
      type: "text",
      pattern: "^[12]$"
    })
    
    inputAnswer.setAttribute("type", questionAswer[index].type)
    inputAnswer.setAttribute("pattern", questionAswer[index].pattern)
  showQuestion(index);
  showQuestionAswer();
});

buttonSend.addEventListener("click", () => {
  resgister();
});

showQuestion(index);
inputAnswer.focus();