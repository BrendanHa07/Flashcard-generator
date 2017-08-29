// Require the 'inquirer' npm package
var inquirer = require('inquirer');

// Import the flashcard constructors
var basicCard = require('./BasicCard');
var clozeCard = require('./ClozeCard');


console.log("Exports Work!!!")

var firstQuestion = new basicCard ("Who was the first President?", "George Washington");

// Create function to ask questions
var questions = 0;

var askQuestion = function () {

if (questions <5) {
    inquirer.prompt([
        {
            name:"name",
            message: "What is your name?"
        }
    ]).then(function() {
        questions++;
        console.log("success!")
        
        askQuestion();
    })
    
    };
}
    