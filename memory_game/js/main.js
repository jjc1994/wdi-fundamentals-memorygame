let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
let cardsInPlay = [];

function checkForMatch ()
{
	if ((cardsInPlay[cardsInPlay.length - 2].rank === cardsInPlay[cardsInPlay.length - 1].rank) && ((cardsInPlay.length - 1) % 2 !== 0))
	{
		alert("You found a match!");
	}
	else if ((cardsInPlay.length - 1) % 2 !== 0)
	{
		alert("Sorry, try again.");
	}
}

function flipCard ()
{
	let cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
	this.setAttribute("src", cards[cardId].cardImage);
	
	cardsInPlay.push(cards[cardId]);
	
	checkForMatch ();
}

function createBoard () 
{
	for (var i = 0; i < cards.length; i++)
	{
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();