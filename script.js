/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

//Click on start button
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var time = 60;
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
var questionIndex = 0

// Questions for the quiz
var questions = [
    { q: 'The sky is blue.' a: ['t', 'f'], correct: 't'},
    { q: 'There are 365 days in a year.', a: ['t', 'f'], correct: 't'},
    { q: 'There are 42 ounces in a pound.', a: ['t', 'f'], correct: 'f'},
    { q: 'The Declaration of Independence was created in 1745.', a: ['t', 'f'], correct: 'f'},
    { q: 'Bananas are vegetables.', a: ['t', 'f'], correct: 'f'}
];

// start the game with score of 0.
var score = 0;

//Loop over every question with a score of 0.
for (var i = 0; i < questions.length; i++) {
    //Display current question to user and ask OK/Cancel
    var answer = confirm(qustions[i].q);

    //Compare answers
    if (
        (answer === true && question[i].a === 't') ||
        (answer === false && question[i].a === 'f')
    ) {
        // Increase score
        score++;
        // Alert the user
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
}

// Show total at end
alert('You got ' + score + '/' + questions.length);

startBtn.addEventListener("click", function(){

    //THEN a timer starts and I am presented with a question
    setInterval(function(){
        time--;
        timer.textContent = time;
    }, 1000)

    //Display the question to questionTitlee
    console.log(questions[0].question)
    //Display each answer to the answers div (create & append)

})

