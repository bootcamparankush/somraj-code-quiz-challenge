var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

console.log(highScores);
console.log(highScoresList);

// for ( var i = 0; i < highScores.length; i++ ) {

// }

// highScoresList.textContent = "Testing";

highScoresList.innerHTML = highScores.map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");


