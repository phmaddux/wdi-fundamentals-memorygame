var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage:"images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var checkForMatch = function (){
  if (cardsInPlay.length === 2) {
	  if (cardsInPlay[0] === cardsInPlay[1]) {
	      alert("You found a match!");
	  } else {
	      alert("Sorry, try again.");
	  }
	}
}
var flipCard = function(cardId) {
	var card = cards[cardId]
	cardsInPlay.push(card.rank)
	console.log("User flipped " + cards[cardId].rank)
	console.log(card.cardImage)
	console.log(card.suit)
	document.getElementById('card' + cardId).setAttribute('src', card.cardImage)
	checkForMatch();
}
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('id', 'card' +i);
		document.getElementById('game-board').appendChild(cardElement);
	}
	document.getElementById('card0').addEventListener('click', () => flipCard(0))
	document.getElementById('card1').addEventListener('click', () => flipCard(1))
	document.getElementById('card2').addEventListener('click', () => flipCard(2))
	document.getElementById('card3').addEventListener('click', () => flipCard(3))
}

createBoard();





