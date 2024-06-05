

// Total number of question is defined and not changeable for the user
let totalNumberQuestions;

// Boxes for hide/display
let box_answers = document.getElementById("box_answers");

// Initialize variables/constants
let index = 0; // Initialize index outside the function
let modeTypeQuestion;
let wrongAnswer;
let correctAnswer;
let userAnswer;

// Answers multiple choice
const answer1 = document.getElementById("box1");
const answer2 = document.getElementById("box2");
const answer3 = document.getElementById("box3");

// Highscore
const mostRecentScore = localStorage.getItem('mostRecentScore');
let numberCorrectAnswers;
let highscore;

// Timer
let timeLeft;
let elem = document.getElementById('Timer');
let timerId = setInterval(countdown, 1000);

// DOM load
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the 'Start Quiz' button
    const startQuizButton = document.getElementById('button');
    startQuizButton.addEventListener('click', startQuiz);

    document.getElementById('quiz_questions').style.visibility = 'hidden';

    // Add event listeners to multiple choice answer options
    const answerElements = document.getElementsByClassName("answer");
    for (let i = 0; i < answerElements.length; i++) {
        answerElements[i].addEventListener('click', clickAnswer);
    }
});

// Function to start the quiz
function startQuiz() {
    // Set index and highscore locally to 0
    index = 0;
    numberCorrectAnswers = 0;
    highscore = numberCorrectAnswers*10;

    // Manage visibility of elements
    document.getElementById('quiz_questions').style.visibility = 'inherit';
    document.getElementById('quiz_settings').style.visibility = 'hidden';

    // Shuffle database
    shuffle(CountriesCapitals);
    console.log(CountriesCapitals);

    // Settings
    saveModeSettings();
    console.log('switch is set to ' + modeTypeQuestion);
    console.log('total number of questions is ' + totalNumberQuestions);

    // Display questions
    displayNextQuestion();
}

// Function to shuffle arrays, according to Fisher-Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const randomIndex1 = Math.floor(Math.random() * (i + 1));

        // Swap elements at current index and random index
        let temp = array[i]; // Store the current element in a temporary variable
        array[i] = array[randomIndex1]; // Assign the randomly selected element to the current index
        array[randomIndex1] = temp; // Assign the stored current element to the randomly selected index
    }
}

// Function to handle answer clicks
function clickAnswer(event) {
    const selectedAnswer = event.target.textContent;
    handleUserAnswer(selectedAnswer);
}

// Function to handle the user's answer
function handleUserAnswer(answer) {
    userAnswer = answer;
    checkAnswer();
    displayNextQuestion();
}

// Function to display the next question or end the quiz if all questions have been answered
function displayNextQuestion() {
    if (index < totalNumberQuestions) {
        document.getElementById("numberOfQuestion").innerHTML = index + " / " + totalNumberQuestions;
        displayQuestionAnswer();
        console.log('displayNextQuestion');
        index++;
        timeLeft = 20;
        countdown();

        console.log('start countdown');
        console.log('display index:' + index);
        console.log('highscore:' + highscore);
        console.log('Number correct Answers:' + numberCorrectAnswers);
    } else {
        // No more questions left, end of the game
        gameOver();
    }
}

// Function to handle the user's input
function handleUserInput(userInput) {
    userAnswer = userInput;
    checkAnswer();
    // After checking the answer, proceed to the next question
    displayNextQuestion();
}

function saveModeSettings() {
    // Get the checkbox
    var checkBoxQ = document.getElementById('CheckboxQuestion');
    var checkBoxN = document.getElementById('CheckboxNumber');

    // Show the status of the checkbox
    if (checkBoxQ.checked == true) {
        console.log('Question checkbox is checked');
        modeTypeQuestion = "capital";
    } else {
        console.log('Question checkbox is unchecked');
        modeTypeQuestion = "country";
    }

    // Define number of questions
    if (checkBoxN.checked == true) {
        console.log('Number checkbox is checked');
        totalNumberQuestions = 40;
    } else {
        console.log('Number checkbox is unchecked');
        totalNumberQuestions = 20;
    }
}

// Show question depending on the setting choice
function displayQuestionAnswer() {
    switch (modeTypeQuestion) {
        case 'capital':
            displayQuestionCapital();
            displayMultipleChoice();
            console.log('capital');
            console.log('Answer User:' + userAnswer);
            break;
        case 'country':
            displayQuestionCountry();
            displayMultipleChoice();
            console.log('country');
            console.log('Answer User:' + userAnswer);
    }
}

// Show question and define the right capital according to the index 
function displayQuestionCapital() {
    const currentQuestion = CountriesCapitals[index];

    document.getElementById("box_questions").innerHTML = "What is the capital of " + currentQuestion.country + " ?";
    correctAnswer = currentQuestion.capital;
    console.log('correct answer defined. It is ' + correctAnswer);
}

// Show question and define the right country according to the index
function displayQuestionCountry() {
    const currentQuestion = CountriesCapitals[index];

    document.getElementById("box_questions").innerHTML = currentQuestion.capital + " is the capital of which country?";
    correctAnswer = currentQuestion.country;
    console.log('correct answer defined. It is ' + correctAnswer);
}

function displayMultipleChoice() {
    // Using the modulo operator % to wrap around to the beginning of the array if the index exceeds its length
    if (modeTypeQuestion == "country") {
        let wrongAnswer1 = CountriesCapitals[(index + 1) % CountriesCapitals.length].country;
        let wrongAnswer2 = CountriesCapitals[(index + 2) % CountriesCapitals.length].country;
    } else if (modeTypeQuestion === "capital") {
        let wrongAnswer1 = CountriesCapitals[(index + 1) % CountriesCapitals.length].capital;
        let wrongAnswer2 = CountriesCapitals[(index + 2) % CountriesCapitals.length].capital;
    }

    let allAnswers = [correctAnswer, wrongAnswer1, wrongAnswer2];
    console.log(allAnswers);

    // Shuffle through list allAnswers so that the right answer is not always on the same index
    shuffle(allAnswers);
    console.log('shuffle baby');

    // Provide input for answers in HTML
    answer1.innerHTML = allAnswers[0];
    answer2.innerHTML = allAnswers[1];
    answer3.innerHTML = allAnswers[2];
}

// Check answer
function checkAnswer() {
    if (userAnswer === correctAnswer) {
        document.getElementById("feedbackForUser").innerHTML = "Correct!";
        numberCorrectAnswers++;
        highscore = highscore + timeLeft + 10;
        document.getElementById("numberCorrectAnswers").innerHTML = "Right answers: " + numberCorrectAnswers;
        console.log('check is done.');
        console.log('Show time left:' + timeLeft);
    } else {
        document.getElementById("feedbackForUser").innerHTML = "Incorrect! The correct answer is " + correctAnswer;
    }
}

// TIMER
function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    gameOver();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

// The game is over
function gameOver() {
    console.log('highscore is: ' + highscore);

    document.getElementById("numberOfQuestion").innerHTML = index + " / " + totalNumberQuestions;
    timeLeft = 0;

    // dailog element html
    const closeButton = document.querySelector("[data-close-modal]");
    const modal = document.querySelector("[data-modal");

    modal.showModal();

    closeButton.addEventListener("click", () => {
    modal.close();
    window.location.replace('end.html');
    });
    
    localStorage.setItem("mostRecentScore", highscore);
}