let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log(cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log(cardTwo);

if (cardOne === cardTwo)
{
	alert("You found a match!");
}
else
{
	alert("Sorry, try again.");
}