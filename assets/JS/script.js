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
var timeLeft = 59;
var timeInterval;
var score = timeLeft;
var currentQuestion = 0;

var questions = [
    {
        question: "Question 1: How do you write 'Hello World' in an alert box?",
        choices: ["msg('Hello World');", "confirm('Hello World');", "alert('Hello World');", "prompt('Hello World');"],
        correct: "alert('Hello World');"
    },
    {
        question: "Question 2: How can you add a comment in JavaScript?",
        choices: ["'This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "// This is a comment"],
        correct: "// This is a comment"
    },
    {
        question: "Question 3: How can you write a Javascript array?",
        choices: ["var color = 1 = ('red'), 2=('green')", "var colors = ['red', 'green']", "var colors = 'red', 'green'", "var colors = (1:'red', 2:'green')"],
        correct: "var colors = ['red', 'green']"
    },
    {
        question: "Question 4: Which event occurs when the user clicks on the HTML element?",
        choices: ["onclick", "submit", "keypress", "wheel"],
        correct: "onclick"
    },
    {
        question: "Question 5: Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        choices: ["last()", "push()", "put()", "none of the above"],
        correct: "push()"
    },
];

function startQuiz() {
    quizTimer();
    getQuestion();
    userPick();
};


// timer starts when button is clicked
function quizTimer() {

    timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerCountdown.textContent = timeLeft;
            timeLeft --;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);

    document.getElementById("quiz-timer").style.color = "red";
};

// when button is clicked then questions and answers appear
  function getQuestion() {
    var question = questions[currentQuestion];

    document.getElementById("question").textContent = question.question;

    answerList.textContent = question.choices[i];

    for (var i = 0; i < question.choices.length; i++) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = question.choices[i];
        answerList.appendChild(listItemEl);
    }    
    currentQuestion++;
    currentQuestion.choices++;    
};

function userPick() {
        var answer = question.correct;

        if (answer) {
            var alertCorrect = document.createElement("span");
            alertCorrect.textContent = "Correct!"
            var userScore = score + 10;
            userScore++;
        } else {
            var alertWrong = document.createElement("span");
            alertWrong.textContent = "Wrong";
            timeLeft = timeLeft - 10;
            timeLeft--; 
        }
};

function endQuiz() {
    // when time hits zero end the quiz
    clearInterval(timeInterval);
    
};


// click the start button to run the quizTimer function
startBtn.addEventListener("click", startQuiz);

// make the created "li" clickable
answerList.addEventListener("click", getQuestion);