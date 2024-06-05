// DOM load
document.addEventListener("DOMContentLoaded", function () {
  let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // reused code: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  
  // combine two parameter name and score
  function getNameScore(item) {
      return [item.name, item.score].join(" ");
    }
  
  // create for each entry one list element
  function createList() {
    highScores.sort(function(x, y) {
      return y.score - x.score;
    });

    highScores.splice(10);
    console.log(highScores);

      document.getElementById('highScoreList').innerHTML = highScores.map((highScore) => {
        return `<li class='highscore'>${ getNameScore(highScore) }</li>`;
      }).join('');
  }

  createList();
  
});