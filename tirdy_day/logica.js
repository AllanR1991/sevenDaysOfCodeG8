let legendQuestion = document.querySelector(".question-options");
let buttonSend = document.querySelector(".button-send");
let container = document.querySelector(".container-options");

// legendQuestion.innerHTML = ""

let questions = [
  {
    question:
      "Você gostaria de na área de Front-End ou seguir na área de Back-End?",
    options: ["Front-End", "Back-End"],
    choise: null,
  },
];

let linguagens = [];

const tecnologias = {
  JavaScript: "A linguagem que dá vida às páginas da web.",
  TypeScript: "O JavaScript com superpoderes de tipagem.",
  React: "Criando interfaces dinâmicas com componentes reutilizáveis.",
  "Node.js": "Executando JavaScript no backend de forma eficiente.",
  Express: "Framework minimalista para construir APIs robustas.",
  "Next.js": "SSR e SSG para aplicativos React rápidos e otimizados.",
  "Vue.js": "A progressiva que facilita a construção de UIs interativas.",
  Angular: "Plataforma completa para desenvolvimento web escalável.",
  HTML: "A base estrutural de qualquer página web.",
  CSS: "Transformando o layout das páginas com estilo.",
  Sass: "O CSS com superpoderes para uma estilização mais eficiente.",
  TailwindCSS: "Estilização rápida com classes utilitárias.",
  Bootstrap: "O framework que facilita layouts responsivos.",
  "Material UI": "Design elegante e consistente para interfaces React.",
  "Chakra UI": "Estilização prática e acessível para React.",
  "Styled Components": "CSS-in-JS para componentes mais organizados.",
  "C#": "Poder e versatilidade no desenvolvimento de software.",
  "ASP.NET Core": "Criando APIs e aplicações web escaláveis.",
  "Entity Framework": "Manejando banco de dados com facilidade no .NET.",
  Blazor: "Criando aplicações web interativas com C#.",
  Java: "A linguagem multiplataforma robusta e confiável.",
  "Spring Boot": "Criando microsserviços Java de forma simples.",
  Hibernate: "Mapeamento objeto-relacional eficiente para Java.",
  JPA: "Interagindo com banco de dados de forma abstrata.",
  Python: "Simplicidade e poder para múltiplas áreas da tecnologia.",
  Django: "O framework que facilita o desenvolvimento web em Python.",
  Flask: "Leve e flexível para criar APIs em Python.",
  FastAPI: "APIs rápidas e eficientes com Python.",
  Ruby: "Uma linguagem elegante e produtiva.",
  "Ruby on Rails": "O framework que agiliza o desenvolvimento web.",
  PHP: "A linguagem que domina o backend da web.",
  Laravel: "Desenvolvimento PHP moderno e elegante.",
  SQL: "A base para manipulação de dados relacionais.",
  PostgreSQL: "Banco de dados poderoso e open-source.",
  MySQL: "O banco de dados relacional mais popular do mundo.",
  SQLite: "Leve, rápido e ideal para aplicações menores.",
  MongoDB: "Banco de dados NoSQL para aplicações escaláveis.",
  Redis: "Armazenamento em cache ultra rápido.",
  Docker: "Empacotando aplicações para rodar em qualquer lugar.",
  Kubernetes: "Orquestrando contêineres para escalabilidade.",
  Terraform: "Infraestrutura como código para automação eficiente.",
  AWS: "A nuvem que impulsiona negócios ao redor do mundo.",
  Azure: "Soluções robustas para computação em nuvem.",
  "Google Cloud": "Escalabilidade e inovação para sua infraestrutura.",
  Git: "Versionamento de código para um desenvolvimento organizado.",
  GitHub: "Hospedagem de repositórios e colaboração entre devs.",
  GitLab: "Pipeline de CI/CD e repositórios em um só lugar.",
  Bitbucket: "Versionamento de código integrado ao Atlassian.",
  GraphQL: "Consultas flexíveis para APIs modernas.",
  "REST API": "Comunicação estruturada entre sistemas.",
  WebSockets: "Comunicação bidirecional em tempo real.",
  gRPC: "Alta performance na comunicação entre serviços.",
  Jest: "Testes unitários confiáveis para JavaScript.",
  Mocha: "Framework flexível para testes JavaScript.",
  Cypress: "Testes end-to-end eficientes para aplicações web.",
  Playwright: "Automação de testes moderna e poderosa.",
  Linux: "O sistema operacional dos servidores e desenvolvedores.",
  "Windows Server": "Infraestrutura confiável para empresas.",
  Bash: "Automação e controle do sistema via terminal.",
  PowerShell: "Automação avançada para Windows.",
  IoT: "Conectando dispositivos inteligentes ao mundo digital.",
  Blockchain:
    "A tecnologia por trás das criptomoedas e contratos inteligentes.",
  AI: "A inteligência artificial revolucionando a tecnologia.",
  "Machine Learning": "Ensinar máquinas a aprender com dados.",
  TensorFlow: "Treinando redes neurais para inteligência artificial.",
  PyTorch: "Framework flexível para aprendizado profundo.",
};

const regexTecnologias = new RegExp(
  `^(${Object.keys(tecnologias).join("|")})$`,
  "i"
);

let index = 0;

function showNewQuestion() {
  let legend = document.querySelector(".question-options");

  let options = document.querySelectorAll(".option");

  legendQuestion.innerHTML = questions[index]?.question;

  options.forEach((element) => {
    element.remove();
  });

  questions[index]?.options?.forEach((element) => {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");

    div.setAttribute("class", "option");

    input.setAttribute("type", "radio");
    input.setAttribute("name", "choise");
    input.setAttribute("id", `${element}`);
    input.setAttribute("value", `${element}`);
    input.setAttribute("class", "options");

    label.setAttribute("for", `${element}`);
    label.textContent = element;

    div.appendChild(input);
    div.appendChild(label);

    container.insertBefore(div, buttonSend);
  });
}

function registerAnswer(answer) {
  questions[index].choise = answer;
}

buttonSend.addEventListener("click", () => {
  let answerButtonRadio = document.querySelector(".options:checked")?.value;
  let indexMax = 2;
  if (answerButtonRadio) {
    registerAnswer(answerButtonRadio);

    if (index != indexMax) {
      index++;
    }

    verifyAnswer(answerButtonRadio);

    if (
      answerButtonRadio != "Especializando" &&
      answerButtonRadio != "FullStack"
    ) {
      showNewQuestion();
    }
  }
});

function verifyAnswer(answer) {
  if (answer == "Front-End") {
    questions.push({
      question: "Você quer aprender React ou pretende aprender Vue?",
      options: ["React", "Vue"],
      choise: null,
    });
  } else if (answer == "Back-End") {
    questions.push({
      question: "Você quer aprender C# ou pretende aprender Java?",
      options: ["C#", "Java"],
      choise: null,
    });
  } else if (
    answer == "React" ||
    answer == "Vue" ||
    answer == "C#" ||
    answer == "Java"
  ) {
    questions.push({
      question:
        "Você pretende continuar se Especializando ou seguir se desenvolvendo para se tornar um FullStack",
      options: ["Especializando", "FullStack"],
      choise: null,
    });
  } else if (answer == "Especializando" || answer == "FullStack") {
    //deve sumir com a view de perungas e opções e exibir a outra
    container.style.display = "none";
  };
};
