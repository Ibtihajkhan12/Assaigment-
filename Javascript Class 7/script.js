
const questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "What is the largest planet in our solar system?",
    "What is the boiling point of water in Celsius?",
    "What is '4*4'?"
];

const answers = [
    "Paris",
    "4",
    "Jupiter",
    "100",
    "16"
];

// Variables to keep track of scores
let correctAnswers = 0;
let wrongAnswers = 0;

// Loop through questions
for (let i = 0; i < questions.length; i++) {
    // Prompt the user for their answer
    let userAnswer = prompt(questions[i]);

    // Check if the user's answer is correct
    if (userAnswer === answers[i]) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
}

// Calculate total score
const totalQuestions = questions.length;
const scorePercentage = (correctAnswers / totalQuestions) * 100;

// Display the user's total score
alert(`You answered ${correctAnswers} questions correctly and ${wrongAnswers} questions incorrectly.`);
alert(`Your score is ${scorePercentage.toFixed(2)}%.`);

// Feedback based on the score
if (scorePercentage >= 90) {
    alert("Grade: A - Excellent job!");
} else if (scorePercentage >= 80) {
    alert("Grade: B - Great work!");
} else if (scorePercentage >= 70) {
    alert("Grade: C - Good effort!");
} else if (scorePercentage >= 60) {
    alert("Grade: D - You passed!");
} else {
    alert("Grade: F - Better luck next time!");
}