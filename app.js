var questions = [
    {
        numb: 1,
        question: "Who is the father of Computers ?",
        answer: "Charles Babbage",
        options: [
            "James Gosling",
            " Bjarne Stroustrup",
            "Charles Babbage",
            "Dennis Ritchie",
        ],
    },
    {
        numb: 2,
        question: "What is the scientific name of frog?",
        answer: "Rana tigrina",
        options: [
            "Bufo bufo",
            "Rana tigrina",
            "Naja Naja",
            "Octopoda",
        ],
    },
    {
        numb: 3,
        question: "30 - 26 ?",
        answer: "4",
        options: [
            "3",
            "2",
            "5",
            "4",
        ],
    },
    {
        numb: 4,
        question: "Which of the following language does the computer understand ?",
        answer: "Computer understands only Binary Language",
        options: [
            " Computer understands only C Language",
            "Computer understands only Binary Language",
            " Computer understands only BASIC",
            "Computer understands only Assembly Language",
        ],
    },
    {
        numb: 5,
        question: "Which is the hardest element on the Earth?",
        answer: "Diamond",
        options: [
            "Diamond",
            "Graphite",
            "Coke",
            "Coal",
        ],
    }
]

var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var main = document.getElementById("main");

var indexNum = 0;
var marks = 0;

function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML =
        "Question # " + (indexNum + 1) + "/" + questions.length;
    ansParent.innerHTML = ''
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btnprimary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`;
    }
}
showQuestion();

function nextQuestion() {
    indexNum++;
    showQuestion();
}

function checkAns(a, b) {
    if (a == b) {
        marks++;
    }
    if (indexNum + 1 == questions.length) {
        main.innerHTML = `<h1 class='text-white'> YOUR MARKS IS ${marks} </h1>`
    }
    else {

        nextQuestion();
    }
}