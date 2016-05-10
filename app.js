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

// Empty array to push shuffled cards into
var shuffledDeck = [];
// This is where the magic happens
var shuffle = function() {
	while (deck.length !== 0) {
		// Array index starts with 0, hence the -1
		var cardPosition = deck.length - 1;
		// Selecting card at that random index
		var chosenCard = Math.floor(Math.random() * cardPosition);
		// Taking the card out of original array 
		// "deck" so there are no repeats
		var moveCard = deck.splice(chosenCard, 1);
		// Splice creates new array so [0] grabs the 
		// object within the array created by splice, and
		// the object is pushed into new array "shuffledDeck"
		shuffledDeck.push(moveCard[0]);
	};
}

