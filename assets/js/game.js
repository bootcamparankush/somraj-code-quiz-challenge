// console.log("Hello is this page working");

var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var questionCounterText = document.getElementById('questionCounter');
var scoreText = document.getElementById('score');
// console.log(choices);

var currentQuestion = {};
var acceptAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
{
    question: "Inside which HTML element do we put the Javascript?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
},
{
    question: "What is the correct syntax to referring to an external script named 'script.js'?",
    choice1: "<script href='script.js'>",
    choice2: "<script name = 'script.js'>",
    choice3: "<script src = 'script.js'>",
    choice4: "<script file='script.js'>",
    answer: 3
},
{
    question: "How do you write 'Hello World' in an alert box?",
    choice1: "msgbox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
}

]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    
    // console.log(availableQuestions);

    getnewQuestion ();

};

// Function timer
const counter = document.querySelector("#timer");
var count = questions.length * 10;

setInterval(timer, 1000);

function timer() {
counter.innerHTML = count;
count--;
    if (count === 0) {
        endGame();
    }
};




getnewQuestion = () => {

    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score);
        // return window.location.assign ("/end.html");
        endGame();
    } 

    questionCounter++;
    // questionCounterText.innerText = '${questionCounter}/${MAX_QUESTIONS}';
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach ( choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion ['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswers = true;
};


choices.forEach (choice => {
    choice.addEventListener ("click", e => {
    // console.log(e.target);
    
    if(!acceptAnswers) return;

    acceptAnswers = false;
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset ["number"];
    count = count - 3;
    var classtoApply = 'incorrect';

    if (selectedAnswer == currentQuestion.answer) {
        // console.log (selectedAnswer == currentQuestion.answer) 
            classtoApply = 'correct';
    }

    if (classtoApply == 'correct') {
        incrementScore(CORRECT_BONUS);
    };

    selectedChoice.parentElement.classList.add(classtoApply);
    
    setTimeout (() => {
        selectedChoice.parentElement.classList.remove(classtoApply);
        getnewQuestion ();
    } , 1000);
    
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}
startGame();

// end game

function endGame(){
    console.log("hello");
    location.replace ("./end.html");
};