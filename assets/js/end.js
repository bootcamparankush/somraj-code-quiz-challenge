var username = document.getElementById('username');
var saveScorebtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
// var highScores = [];
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var MAX_HIGH_SCORES = 5;
// console.log(highScores);

finalscore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>  {
// console.log(username.value);
saveScorebtn.disabled = !username.value;
});


//function to save high score in localstorage
saveHighScore = e => {
    console.log("click the save button");
    e.preventDefault();

    var score = {
        score: Math.floor(Math.random()*100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem("highscores", JSON.stringify(highScores));
    // window.location.assign("./highscores.html");

    console.log(highScores);
};