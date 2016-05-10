// Just spent a few minutes typing this out and 
// I have a feeling it was a giant waste of time
// and there was probably a DRYer way to do it
// (ﾉಥ益ಥ）ﾉ﻿ ┻━┻
// But here's the deck in an array that I'm going
// to apply Fisher-Yates to for shuffling purposes
 var deck = 
	[{name: "2 of Clubs", value: 2},
	 {name: "3 of Clubs", value: 3},
	 {name: "4 of Clubs", value: 4},
	 {name: "5 of Clubs", value: 5},
	 {name: "6 of Clubs", value: 6},
	 {name: "7 of Clubs", value: 7},
	 {name: "8 of Clubs", value: 8},
	 {name: "9 of Clubs", value: 9},
	 {name: "10 of Clubs", value: 10},
	 {name: "J of Clubs", value: 10},
	 {name: "Q of Clubs", value: 10},
 	 {name: "K of Clubs", value: 10},
	 {name: "A of Clubs", value: ""},
	 {name: "2 of Diamonds", value: 2},
	 {name: "3 of Diamonds", value: 3},
	 {name: "4 of Diamonds", value: 4},
	 {name: "5 of Diamonds", value: 5},
	 {name: "6 of Diamonds", value: 6},
	 {name: "7 of Diamonds", value: 7},
	 {name: "8 of Diamonds", value: 8},
	 {name: "9 of Diamonds", value: 9},
	 {name: "10 of Diamonds", value: 10},
	 {name: "J of Diamonds", value: 10},
	 {name: "Q of Diamonds", value: 10},
	 {name: "K of Diamonds", value: 10},
	 {name: "A of Diamonds", value: ""},
	 {name: "2 of Hearts", value: 2},
	 {name: "3 of Hearts", value: 3},
	 {name: "4 of Hearts", value: 4},
	 {name: "5 of Hearts", value: 5},
	 {name: "6 of Hearts", value: 6},
	 {name: "7 of Hearts", value: 7},
	 {name: "8 of Hearts", value: 8},
	 {name: "9 of Hearts", value: 9},
	 {name: "10 of Hearts", value: 10},
	 {name: "J of Hearts", value: 10},
	 {name: "Q of Hearts", value: 10},
	 {name: "K of Hearts", value: 10},
	 {name: "A of Hearts", value: ""},
	 {name: "2 of Spades", value: 2},
	 {name: "3 of Spades", value: 3},
	 {name: "4 of Spades", value: 4},
	 {name: "5 of Spades", value: 5},
	 {name: "6 of Spades", value: 6},
	 {name: "7 of Spades", value: 7},
	 {name: "8 of Spades", value: 8},
	 {name: "9 of Spades", value: 9},
	 {name: "10 of Spades", value: 10},
	 {name: "J of Spades", value: 10},
	 {name: "Q of Spades", value: 10},
	 {name: "K of Spades", value: 10},
	 {name: "A of Spades", value: ""}];

// (ヘ･_･)ヘ┳━┳ moving on...
// Time to figure out Fisher-Yates.

// var deck, N.length
// var shuffledDeck = [];

// // To choose a random card to push into shuffledDeck
// // N-- because index starts at 0
// // Math.floor to round down to nearest full number
// // Math.random to randomly select a card
// var chosenCard = Math.floor(Math.random() * N--); 
// // Pushes randomly selected chosenCard into shuffledDeck array
// (shuffledDeck).push(chosenCard);
// // chosenCard needs to be removed from deck array
// .splice((chosenCard), 1)
// // Repeat!
var shuffledDeck = [];
var shuffle = function() {
	while (deck.length !== 0) {
		var cardPosition = deck.length - 1;
		var chosenCard = Math.floor(Math.random() * cardPosition);
		var moveCard = deck.splice(chosenCard, 1);
		shuffledDeck.push(moveCard[0]);
	};
}




