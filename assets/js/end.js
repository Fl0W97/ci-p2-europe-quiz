// DOM load
document.addEventListener("DOMContentLoaded", function () {
    // define username, score
    const usernameInput = document.getElementById('username');
    const saveScoreButton = document.getElementById('saveScoreBtn');
    const finalScore = document.getElementById('finalScore');
    const mostRecentScore = localStorage.getItem('mostRecentScore');

    usernameInput.addEventListener('input', () => {
        saveScoreButton.disabled = !usernameInput.value.trim();
    });

    saveScoreButton.addEventListener('click', saveHighScore);

    // create a list with score and name in local storage
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    finalScore.innerText = mostRecentScore;

    // Check if score is valid
    if (mostRecentScore) {
        finalScore.innerText = `Your Score: ${mostRecentScore}`;
    } else {
        finalScore.innerText = 'No score available';
    }

    // Save highscore in local storage and modal dialog
    function saveHighScore(event) {
        event.preventDefault(); // Prevent the form from submitting if it's inside a form

        const username = usernameInput.value.trim(); // Get the trimmed value from the input field

        const score = {
            score: mostRecentScore,
            name: username,
        };

        highScores.push(score);

        localStorage.setItem('highScores', JSON.stringify(highScores));
        console.log('highScores after push:', highScores);

        // dailog element html
        const closeButton = document.querySelector("[data-close-modal]");
        const modal = document.querySelector("[data-modal]");

        modal.showModal();

        closeButton.addEventListener("click", () => {
            modal.close();

            // Optional: Clear the username input after saving
            usernameInput.value = "";

            // go back to the beginning
            window.location.replace('index.html');
        });
    }
});