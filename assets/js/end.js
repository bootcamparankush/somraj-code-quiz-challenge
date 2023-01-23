var username = document.getElementById('username');
var saveScorebtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var MAX_HIGH_SCORES = 5;
console.log(highScores);

finalscore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>  {
// console.log(username.value);
saveScorebtn.disabled = !username.value;
});

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

    localStorage.setItem("highscore", JSON.stringify(highScores));
    window.location.assign("./index.html");

    console.log(highScores);
};