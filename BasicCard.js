var inquirer = require('inquirer');

// Creating the BasicCard constructor
var BasicCard = function (front, back) {
    this.front=front;
    this.back=back;
};

// var firstQuestion = new BasicCard ("Who is the first President of the United States?", "George Washington");


// inquirer.prompt([
//     {
//         name:"firstQuestion",
//         message: "Question: " + firstQuestion.front
//     }
// ]).then(function(input) {
//     if (input.firstQuestion === firstQuestion.back) {
//         console.log("Correct!")
//     } else {
//         console.log("Incorrect! The correct answer is: " + firstQuestion.back);
//     };   
// });


// Exports BasicCard constructor
module.exports = BasicCard;


