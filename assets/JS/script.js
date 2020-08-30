// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


var startBtn = document.getElementById("start-button");
var timerCountdown = document.getElementById("quiz-timer");
var answerList = document.getElementById("answer-list");
var quizSection = document.getElementById("quiz-wrapper");

var currentQuestion = 0;

var questions = [
    {
        question: "Question 1: What color is the sky?",
        choices: ["blue", "green", "red", "orange"],
        correct: "blue"
    },
    {
        question: "Question 2: What color is the grass?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
    },
    {
        question: "Question 3: The current year is _____.?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
    },
    {
        question: "Question 4: What noise does a dog make?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
    },
    {
        question: "Question 5: How many days are in a year?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
    },
];


function startQuiz() {
    quizTimer();
};



// timer starts when button is clicked
function quizTimer() {
    var timeLeft = 59;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerCountdown.textContent = timeLeft;
            timeLeft --;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);

    document.getElementById("quiz-timer").style.color = "red";

    getQuestion();
};

// when button is clicked then questions and answers appear
  function getQuestion() {
    var question = questions[currentQuestion];

    document.getElementById("question").textContent = question.question;

    document.getElementById("answer-list").textContent = question.choices;

    for (i = 0; i < question.choices.length; i++) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = question.choices[i];
        answerList.appendChild(listItemEl);
    }    
    currentQuestion++;
    currentQuestion.choices++;
};

 
// click the start button to run the quizTimer function
startBtn.addEventListener("click", startQuiz);

// make the created "li" clickable
answerList.addEventListener("click", getQuestion);