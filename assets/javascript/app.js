var gameOver = false;
var correctAnswer = 0;
var incorrectAnswer = 0;
var questionsAnswered = 0;
var userAnswer;
var currentQuestion;
var gameInfo = [
    { question: "Which main character wears licorice in her hair?", rightAnswer: "Vanellpe von Schweetz", answerOptions: ["Elsa", "Snow White", "Vanellpe von Schweetz", "Princess Poppy"], image: "assets/images/Vanellope.png" },
    { question: "What movie does Denzel Washington NOT play in?", rightAnswer: "I Am Legend", answerOptions: ["I Am Legend", "Two Guns", "Training Day", "The Equalizer"], image: "assets/images/I_Am_Legend.jpg" },
    { question: "Which character has a reindeer as their best friend?", rightAnswer: "Kristoff", answerOptions: ["Flynn Rider", "Shrek", "Lilo", "Kristoff"], image: "assets/images/Kristoff.jpg" },
    { question: "In what movie, do two friends make up identities to get girls?", rightAnswer: "Wedding Crashers", answerOptions: ["Hitch", "Crazy Stupid Love", "Wedding Crashers", "How To Lose A Guy In 10 Days"], image: "assets/images/Wedding_Crashers.jpg" },
    { question: "In this 2008 film the villain asks, \"Why so serious?\"", rightAnswer: "The Dark Knight", answerOptions: ["Hancock", "The Dark Knight", "Iron Man", "The Incredible Hulk"], image: "assets/images/Joker.jpg" },
    { question: "Which Disney Princess has to restore the heart of Tafiti?", rightAnswer: "Moana", answerOptions: ["Rapunzel", "Moana", "Merida", "Pocahontas"], image: "assets/images/Moana.png" },
    { question: "Which movie character said \"Your lack of faith is disturbing.\"?", rightAnswer: "Darth Vader", answerOptions: ["Darth Vader", "Yoda", "Luke Skywalker", "Boba Fett"], image: "assets/images/Darth_Vader.jpg" },
    { question: "In what movie, does the bear become vulgar and immature?", rightAnswer: "Ted", answerOptions: ["The Jungle Book", "Winnie The Pooh", "Kung Fu Panda", "Ted"], image: "assets/images.Ted.jpg" },
];


$(document).ready(function () {
    startGame();
    $("#reset").hide();
    // questionTimer();
    $("#answer-a").on("click", 0, onAnswerSelected);
    $("#answer-b").on("click", 1, onAnswerSelected);
    $("#answer-c").on("click", 2, onAnswerSelected);
    $("#answer-d").on("click", 3, onAnswerSelected);
    $("#reset").on("click", function () {
        restartGame();
    });
});

function onAnswerSelected(event) {
    userAnswer = currentQuestion.answerOptions[event.data];
    userGuess();
};

function startGame() {

    currentQuestion = gameInfo[questionsAnswered];
    $("#question").text(currentQuestion.question);
    $("#answer-a").text(currentQuestion.answerOptions[0]);
    $("#answer-b").text(currentQuestion.answerOptions[1]);
    $("#answer-c").text(currentQuestion.answerOptions[2]);
    $("#answer-d").text(currentQuestion.answerOptions[3]);
};


function userGuess() {
    if (userAnswer == currentQuestion.rightAnswer) {
        $("#question").text("You answered this question correctly!");
        $("#answer-a").text("");
        $("#answer-b").text("");
        $("#answer-c").text("");
        $("#answer-d").text("");
        var image = $("#trivia-image");
        image.src = currentQuestion.image;
        correctAnswer++;
    }

    else {
        $("#question").text("You answered incorrectly! The correct answer is " + currentQuestion.rightAnswer + ".");
        $("#answer-a").text("");
        $("#answer-b").text("");
        $("#answer-c").text("");
        $("#answer-d").text("");
        var image = $("#trivia-image");
        image.src = currentQuestion.image;
        incorrectAnswer++;
    }
    questionsAnswered++;

    // if (questionsAnswered !== 8) {
    //     startGame();
    // }
    // else {
    //     gameOver = true;
    //     $("#reset").show();
    // }
};

function restartGame() {
    var gameOver = false;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var questionsAnswered = 0;
    var userAnswer;
    var currentQuestion;
    startGame();
    $("#answer-a").on("click", 0, onAnswerSelected);
    $("#answer-b").on("click", 1, onAnswerSelected);
    $("#answer-c").on("click", 2, onAnswerSelected);
    $("#answer-d").on("click", 3, onAnswerSelected);

};



function questionTimer() {
    var timeLeft = 20;
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            $("#time-clock").text("Time is up");
        }
        else {
            $("#time-clock").text(timeLeft + " seconds remaining.");
            timeLeft--;
        }
    };
};