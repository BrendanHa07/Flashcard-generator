var inquirer = require('inquirer');
var questions = [];
var count = 0;

// Create ClozeCard constructor
var ClozeCard = function (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;

    this.partial = function () {

        if (this.fullText.includes(this.cloze)) {
            return this.fullText.replace(this.cloze, "...");
        } else {
            var brokenCloze = "Oops! The full text: " + this.fullText + " doesn't contain the cloze: " + this.cloze + ".";
            return brokenCloze;
        };
    };

};

var firstQuestion = new ClozeCard ("The Enola Gay was the bomber that dropped the first atomic bomb.", "Enola Gay");
var secondQuestion = new ClozeCard ("Franklin D. Roosevelt was the President during WWII.", "Franklin D. Roosevelt");

questions.push(firstQuestion);
questions.push(secondQuestion);

var askQuestion = function () {
    if (count < questions.length) {
        inquirer.prompt([
            {
                name:"question",
                message: "Question: " + questions[count].partial()
            }
        ]).then(function(answer) {
            if(answer.question === questions[count].cloze) {
                console.log("You are correct!");
            } else {
                console.log("Incorrect! The correct answer is: " + questions[count].cloze);
            };
            count++
            askQuestion();
        });
    } else {
        console.log("No More Questions!");
    };
};
askQuestion();
