var username = document.getElementById('username');
var saveScorebtn = document.getElementById('saveScoreBtn');

username.addEventListener('keyup', () =>  {
// console.log(username.value);
saveScorebtn.disabled = !username.ariaValueMax;
});

saveHighScore = (e) => {
    console.log("click the save button");
    e.preventDefault();
}