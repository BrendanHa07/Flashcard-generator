var inquirer = require('inquirer');

// Require BasicCard for testing
var BasicCard = require('./BasicCard');

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

// var firstCloze = new ClozeCard ("The Civil War ended in 1865.", "1865");

//     inquirer.prompt([
//         {
//             name:"firstCloze",
//             message: "Question: " + firstCloze.partial()
//         }
//     ]).then(function(input) {
//         if(input.firstCloze === firstCloze.cloze) {
//             console.log("You are correct!");
//         } else (
//             console.log("Incorrect... the correct answer is: " + firstCloze.cloze)
//         )
//     });

// Export module to use in app.js
module.exports = ClozeCard;