console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var cardOne = cards[1];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	console.log("Y");
	if (cards[1] === cards[2]) {
		console.log("You found a match!");
		alert("You found a match!");
	} else {
		console.log("Sorry, try again.");
		alert("Sorry, try again.");
	}
} 


