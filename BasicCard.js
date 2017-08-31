// Create all needed variables
var inquirer = require('inquirer');
var questions = [];
var count = 0;

// Creating the BasicCard constructor
var BasicCard = function (front, back) {
    this.front=front;
    this.back=back;
};

// Create questions with the constructor
var firstQuestion = new BasicCard ("Who is the first President of the United States?", "George Washington");
var secondQuestion = new BasicCard ("The Declaration of Independence was signed in what year?", "1776");

// Push questions into array
questions.push(firstQuestion);
questions.push(secondQuestion);

// Create function to ask questions and prompt the user
var askQuestion = function () {
        if (count < questions.length) {
            inquirer.prompt([
                {
                    name:"question",
                    message: "Question: " + questions[count].front
                }
            ]).then(function(answer) {
                if(answer.question === questions[count].back) {
                    console.log("You are correct!");
                } else {
                    console.log("Incorrect! The correct answer is: " + questions[count].back);
                };
                count++
                askQuestion();
            });
        } else {
            console.log("No More Questions!");
        };
};
askQuestion();
    


