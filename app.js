// Just spent a few minutes typing this out and 
// I have a feeling it was a giant waste of time
// and there was probably a DRYer way to do it
// (ﾉಥ益ಥ）ﾉ﻿ ┻━┻
// But here's the deck in an array that I'm going
// to apply Fisher-Yates to for shuffling purposes
 var fullDeck = 
	[{name: "2_of_clubs", value: 2, url: ""},
	 {name: "3_of_clubs", value: 3, url: ""},
	 {name: "4_of_clubs", value: 4, url: ""},
	 {name: "5_of_clubs", value: 5, url: ""},
	 {name: "6_of_clubs", value: 6, url: ""},
	 {name: "7_of_clubs", value: 7, url: ""},
	 {name: "8_of_clubs", value: 8, url: ""},
	 {name: "9_of_clubs", value: 9, url: ""},
	 {name: "10_of_clubs", value: 10, url: ""},
	 {name: "j_of_clubs", value: 10, url: ""},
	 {name: "q_of_clubs", value: 10, url: ""},
 	 {name: "k_of_clubs", value: 10, url: ""},
	 {name: "a_of_clubs", value: 11, url: ""},
	 {name: "2_of_diamonds", value: 2, url: ""},
	 {name: "3_of_diamonds", value: 3, url: ""},
	 {name: "4_of_diamonds", value: 4, url: ""},
	 {name: "5_of_diamonds", value: 5, url: ""},
	 {name: "6_of_diamonds", value: 6, url: ""},
	 {name: "7_of_diamonds", value: 7, url: ""},
	 {name: "8_of_diamonds", value: 8, url: ""},
	 {name: "9_of_diamonds", value: 9, url: ""},
	 {name: "10_of_diamonds", value: 10, url: ""},
	 {name: "j_of_diamonds", value: 10, url: ""},
	 {name: "q_of_diamonds", value: 10, url: ""},
	 {name: "k_of_diamonds", value: 10, url: ""},
	 {name: "a_of_diamonds", value: 11, url: ""},
	 {name: "2_of_hearts", value: 2, url: ""},
	 {name: "3_of_hearts", value: 3, url: ""},
	 {name: "4_of_hearts", value: 4, url: ""},
	 {name: "5_of_hearts", value: 5, url: ""},
	 {name: "6_of_hearts", value: 6, url: ""},
	 {name: "7_of_hearts", value: 7, url: ""},
	 {name: "8_of_hearts", value: 8, url: ""},
	 {name: "9_of_hearts", value: 9, url: ""},
	 {name: "10_of_hearts", value: 10, url: ""},
	 {name: "j_of_hearts", value: 10, url: ""},
	 {name: "q_of_hearts", value: 10, url: ""},
	 {name: "k_of_hearts", value: 10, url: ""},
	 {name: "a_of_hearts", value: 11, url: ""},
	 {name: "2_of_spades", value: 2, url: ""},
	 {name: "3_of_spades", value: 3, url: ""},
	 {name: "4_of_spades", value: 4, url: ""},
	 {name: "5_of_spades", value: 5, url: ""},
	 {name: "6_of_spades", value: 6, url: ""},
	 {name: "7_of_spades", value: 7, url: ""},
	 {name: "8_of_spades", value: 8, url: ""},
	 {name: "9_of_spades", value: 9, url: ""},
	 {name: "10_of_spades", value: 10, url: ""},
	 {name: "j_of_spades", value: 10, url: ""},
	 {name: "q_of_spades", value: 10, url: ""},
	 {name: "k_of_spades", value: 10, url: ""},
	 {name: "a_of_spades", value: 11, url: ""}];

var hoomanPlayer = 
	{hand: [],
	 points: [],
	 totalPoints: []};

var dealer = 
	{hand: [],
	 points: [],
	 totalPoints: []};

// (ヘ･_･)ヘ┳━┳ moving on...
// Time to figure out Fisher-Yates.

// Empty array to push shuffled cards into
var shuffledDeck = [];
// fullDeck is not affected so replenishment is possible
var deckClone = fullDeck.slice(0);
var deck = deckClone;
// This is where the magic happens
var shuffle = function() {
	// Repeats until the original deck is empty
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
	console.log(shuffledDeck);
	// Allows for multiple shuffles
	deck = [];
	deck = shuffledDeck;
	console.log(deck);
	shuffledDeck = [];
};

// Play forever with automatically replenishing deck
var replenishDeck = function() {
	if (deck.length < 10) {
		var deckClone = fullDeck.slice(0);
		while (deckClone.length !==0) {
			// Basically the shuffle function
			var moveCardNew = deckClone.splice(Math.floor(Math.random() * (deckClone.length - 1)), 1);
			deck.push(moveCardNew[0]);
		};
	};
};

// Deal card
var dealCard = function(player) {
	cardDealt = deck.shift();
	(player.hand).push(cardDealt);
	console.log(player.hand);
};

// Calculate points
var getPoints = function(player) {
	for (var i = 0; i < player.hand.length; i++) {
		player.points.push(player.hand[i].value);
	};
	console.log(player.points);
	// Sum up points
		for (var i in player.points) {
			player.totalPoints = player.points.reduce(function(a,b) {
				return a + b;
			});
		};
	console.log(player.totalPoints);
	findAce(player);
	// See if there are any changes with Ace
	console.log(player.totalPoints);
};

// So there are no repeats when calculating points
var clearPoints = function(player) {
	player.points = [];
	player.totalPoints = 0;
	// Checking to make sure it is cleared
	console.log(player.points);
	console.log(player.totalPoints);
};

// Value of Ace is adjusted if necessary
// Jess came up with this idea, honestly a lifesaver
var findAce = function(player) {
	for (var i = 0; i < (player.hand).length; i++) {
		if ((player.hand[i]).value === 11) {
			if (player.totalPoints > 21) {
				player.totalPoints = player.totalPoints - 10;
			};
		};
	};
};

var newHand = function() {
	hoomanPlayer.hand = [];
	clearPoints(hoomanPlayer);
	dealer.hand = [];
	clearPoints(dealer);
	replenishDeck();
};

// Makes player's cards appear
var appendPlayerCard = function() {
	for (i = 0; i < hoomanPlayer.hand.length; i++) {
		var playerCard = hoomanPlayer.hand[i].name;
	  var cardImage = $("<img>").attr("src", "cards/" + playerCard + ".png").attr("height", 150).attr("width", 103);
	  $("#player-cards").append(cardImage);
	};
};

// Makes dealer's cards appear
var appendDealerCard = function() {
	for (i = 0; i < dealer.hand.length; i++) {
		var dealerCard = dealer.hand[i].name;
	  var cardImage = $("<img>").attr("src", "cards/" + dealerCard + ".png").attr("height", 150).attr("width", 103);
	  $("#dealer-cards").append(cardImage);
	};
};

// Deals two cards to each player
var dealHands = function() {
	if (deck.length >= 52) {
		shuffle();
		//Extra shuffling just because
		shuffle();
		shuffle();
	}
	while (hoomanPlayer.hand.length < 2 && dealer.hand.length < 2) {
		dealCard(hoomanPlayer);
		dealCard(dealer);
	};
	$("#dealer-label").text("Dealer");
	$("#player-label").text("Player");
	appendPlayerCard();
	appendDealerCard();
	getPoints(hoomanPlayer);
	getPoints(dealer);
	// Check for "Blackjack"
	if (hoomanPlayer.totalPoints === 21) {
		console.log("Player wins!");
		newHand();
	};
};

// Runs when player stays
var hitUntil17 = function() {
	while (dealer.totalPoints < 17) {
		clearPoints(dealer);
		dealCard(dealer);
		getPoints(dealer);
	};
};

// Comparing card values after hit and/or stay occurs
var calculateWinner = function () {
	if (dealer.totalPoints > 21) {
		// Player wins!
		alert("Player wins!");
	} else if (hoomanPlayer.totalPoints > dealer.totalPoints) {
		// Player wins!
		alert("Player wins!");
	} else if (dealer.totalPoints > hoomanPlayer.totalPoints) {
		// Dealer wins!
		alert("Dealer wins!");
	} else {
		// Push!
		alert("Push!");
	};
	console.log("Deck has: " + deck.length + " cards.");
	$(".card-area").empty();
	newHand();
};

// Deals a card to player
$("#hit-me").click(function() {
	dealCard(hoomanPlayer);
	$("#player-cards").empty();
	appendPlayerCard();
	clearPoints(hoomanPlayer);
	getPoints(hoomanPlayer);
	//Check for win or bust
	if (hoomanPlayer.totalPoints < 21) {
		// Do nothing.
	} else {
		if (hoomanPlayer.totalPoints > 21) {
			alert("Bust!");
			newHand();
		} else {
			alert("Player wins!");
			newHand();
		};
		$(".card-area").empty();
		console.log("Deck has: " + deck.length + " cards.");
	};
});

// Begins new hand, deals to players
$("#deal-hands").click(function() {
	dealHands();
});

// Stand button, skip player
$("#stand").click(function() {
	hitUntil17();
	$("#dealer-cards").empty();
	appendDealerCard();
	calculateWinner();
});



