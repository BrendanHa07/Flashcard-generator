// Require the 'inquirer' npm package
var inquirer = require('inquirer');

// Import the flashcard constructors
var basicCard = require('./BasicCard');
var clozeCard = require('./ClozeCard');


console.log("Exports Work!!!")

// Create function to ask questions
var questions = 0;
var firstQuestion = new basicCard ("Who is the first President of the United States?", "George Washington");
var secondQuestion = new clozeCard ("Franklin D. Roosevelt was the President during WWII.", "Franklin D. Roosevelt");

var askQuestion = function () {
if (questions <1) {
    inquirer.prompt([
        {
            name:"firstQuestion",
            message: "Question: " + firstQuestion.front
        }
    ]).then(function(input) {
        var answer = new basicCard (
            input.firstQuestion
        );
        if (input.firstQuestion === firstQuestion.back) {
            console.log("Correct!")
        } else {
            console.log("Incorrect! The correct answer is: " + firstQuestion.back);
        };
        questions++;
        askQuestion();
    });
    } else {
        console.log("No more questions!")
    }
};
askQuestion();

    