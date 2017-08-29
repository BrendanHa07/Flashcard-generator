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
// Testing the basic card constuctor
var firstPresident = new BasicCard ("Who was the first President?", "George Washington");
console.log(firstPresident.front);
console.log(firstPresident.back);

// Testing the cloze card constructor
var firstPresidentCloze = new ClozeCard ("George Washington was the first President.", "George Washington");
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial());
console.log(firstPresidentCloze.fullText);

// Testing cloze card with error
var errorPresidentcloze = new ClozeCard ("Jon Snow is actually a Targaryen.", "Targaryan");
console.log(errorPresidentcloze.cloze);
console.log(errorPresidentcloze.partial());
console.log(errorPresidentcloze.fullText);

// Export module to use in app.js
module.exports = ClozeCard;