// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

const instructions = document.getElementById('quiz-instructions');
var startBtn = document.getElementById("start-button");
const btnWrapper = document.getElementById('button-wrapper');
var timerCountdown = document.getElementById("quiz-timer");
var answerList = document.getElementById("answer-list");
var quizSection = document.getElementById("quiz-wrapper");
var timeLeft = 59;
var timeInterval;
var score = 0;
var currentQuestion = 0;
let userForm = document.querySelector('#user-form');
let userName = document.getElementById('uName');
const userFormSubmit = document.getElementById('submitBtn');
const highScores = document.getElementById('high-scores');
const alertWrap = document.getElementById('alert-wrapper');


userForm.style.visibility = 'hidden';

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


const myStorage = window.localStorage;

const users = JSON.parse(myStorage.getItem('user')) || [];

const user = {
    uName: "",
};

function createUser() {
    user.uName = userName.value;

    users.push(user);

    myStorage.setItem("user", JSON.stringify(users));
};


let quizStarted = false;

function startQuiz() {
    quizStarted = true;
    if (quizStarted === true) {
        instructions.style.display = 'none';
        startBtn.style.display = 'none';
    }
    quizTimer();
    getQuestion();
};



// timer starts when button is clicked
function quizTimer() {

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerCountdown.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);

    document.getElementById("quiz-timer").style.color = "red";
};

// when button is clicked then questions and answers appear
function getQuestion() {
    var question = questions[currentQuestion];

    if (!question) {
        endQuiz()
    } else {
        document.getElementById("question").textContent = question.question;
    }

    if (!question) {
        endQuiz();
    }

    try {
        if (question) throw answerList.textContent = question.choices[i];
    }
    catch (err) {
        console.log(err);
    };


    try {
        for (var i = 0; i < question.choices.length; i++) {
            var listItemEl = document.createElement("li");
            listItemEl.style.padding = "5px";
            listItemEl.style.listStyle = "none";
            listItemEl.textContent = question.choices[i];
            answerList.appendChild(listItemEl);
            listItemEl.addEventListener('click', userPick);
        }
    }
    catch (err) {
        console.log('There are no more questions');
    }

    currentQuestion.choices++;
};

function userPick() {
    var question = questions[currentQuestion];

    if (question.correct === this.textContent) {
        var correctAlert = document.createElement("p");
        correctAlert.textContent = "Correct!";
        correctAlert.style.color = 'green';
        alertWrap.innerHTML = "";
        alertWrap.appendChild(correctAlert);

        setTimeout(function () { correctAlert.textContent = "" }, 1000);

        score = score + 20;
        myStorage.setItem("score", score);

    } else if (question.correct < this.textContent || question.correct > this.textContent) {
        var wrongAlert = document.createElement("p");
        wrongAlert.textContent = "Incorrect!";
        wrongAlert.style.color = 'red';
        alertWrap.appendChild(wrongAlert);

        setTimeout(function () { wrongAlert.textContent = "" }, 1000);
        score = score + 0;
    }
    currentQuestion++;
};

function endQuiz() {
    // when time hits zero end the quiz
    clearInterval(timeInterval);
    userForm.style.visibility = 'visible';
    quizSection.style.display = 'none';
};

const showModal = document.querySelector('#myModal');
const modalContent = document.querySelector('#modal-content');

function getHighScores() {
    const localUsr = JSON.parse(myStorage.getItem('user'));
    const scores = [];

    localUsr.forEach(user => {
        scores.push(user.uName)
        const lastScore = myStorage.getItem('score');
        scores.push(lastScore);
    });

    showModal.style.display = 'block';

    const currentHighScore = scores[scores.length - 1];
    const currentChamp = scores[scores.length - 2];

    modalContent.textContent = currentChamp + ': ' + currentHighScore;
    console.log(modalContent);

};

const closeBtn = document.querySelector('.close');

function closeModal() {
    showModal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

// click the start button to run the quizTimer function
startBtn.addEventListener("click", startQuiz);

// make the created "li" clickable
answerList.addEventListener("click", getQuestion);

// event handle to create a user
userFormSubmit.addEventListener('click', createUser);

highScores.addEventListener('click', getHighScores);