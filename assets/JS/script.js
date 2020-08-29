var startBtn = document.getElementById("start-button");
var timerClock = document.getElementById("quiz-timer");
var answerList = document.getElementById("answer-list");
var quizSection = document.getElementById("quiz-wrapper");

var currentQuestion = 0;
question[currentQuestion];

var questions = [
    {
        question: "Question 1: What color is the sky?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
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



// timer starts when button is clicked
function quizTimer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerClock.textContent = timeLeft;
            timeLeft --;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
};


// click the start button to run the quizTimer function
startBtn.addEventListener("click", quizTimer);


// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score