
var runGame = function() {
	shuffle();
	startGame();
	getPlayerPoints();
	getDealerPoints();
}








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
	 {name: "A of Clubs", value: 11},
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
	 {name: "A of Diamonds", value: 11},
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
	 {name: "A of Hearts", value: 11},
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
	 {name: "A of Spades", value: 11}];

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

// // Two cards are dealt to players, 
// // player first then house, alternating
var cardDealt;
var dealCard = function() {
// 	// Removes first card from shuffledDeck
	var cardDealt = shuffledDeck.shift();
}

// var dealCard = shuffledDeck.shift();

// Deal to player
var playerHand = [];
var dealtoPlayer = function() {
	cardDealt = shuffledDeck.shift();
	playerHand.push(cardDealt);
}

// Deal to dealer
var dealerHand = [];
var dealtoDealer = function() {
	cardDealt = shuffledDeck.shift();
	dealerHand.push(cardDealt);
}

// Is there a DRYer way to do it?
// var dealCard = function() {}
// Call within dealtoPlayer, dealtoDealer

// Check total of hand
$("")

for (var i = 0; i < playerHand.length; i++) {

	playerPoints.push(playerHand[i].value);
	var totalPlayerPoints = playerPoints.reduce(function(a, b) {
		return a + b;
	}); 
}

// Hit
if (totalDealerPoints < 17) {
	dealtoDealer();
}

// Ace (11 or 1)

function findAce(value) {
	return value = 11;
}
playerHand.find(findAce());

if (totalPlayerPoints > 21) {
	totalPlayerPoints = totalPlayerPoints - 10;
}

$(document).ready(function() {
	$("shuffledDeck").find("11")
})

var findAce = function() {
	for (var i = 0; i < playerHand.length; i++) {
		if (playerHand[i].value = 11) {
			if (totalPlayerPoints > 21) {
				totalPlayerPoints = totalPlayerPoints - 10;
			};
		};
	};
}

// ==================================================

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
	 {name: "A of Clubs", value: 11},
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
	 {name: "A of Diamonds", value: 11},
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
	 {name: "A of Hearts", value: 11},
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
	 {name: "A of Spades", value: 11}];

// (ヘ･_･)ヘ┳━┳ moving on...
// Time to figure out Fisher-Yates.

$("#hit-me").click(function() {
	dealtoPlayer();
	if (totalDealerPoints < 17) {
		dealtoDealer();
	};
});

// Empty array to push shuffled cards into
var shuffledDeck = [];
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
	deck = shuffledDeck;
}

// Player hand
var player = [];
var dealtoPlayer = function() {
	// .shift() removes the element, can push into empty array
	cardDealt = deck.shift();
	playerHand.push(cardDealt);
	// Please work, please work...
	console.log(player);
}

// Dealer hand
var dealer = [];
var dealtoDealer = function() {
	cardDealt = deck.shift();
	dealer.push(cardDealt);
	// It works but I'm checking anyway
	console.log(dealer);
}

// Game requires two cards to be dealt to each player
var startGame = function() {
	dealtoPlayer();
	dealtoDealer();
	dealtoPlayer();
	dealtoDealer();
}

var playerPoints = [];
var totalPlayerPoints = 0;

var findPlayerAce = function() {
	for (var i = 0; i < playerHand.length; i++) {
		if (playerHand[i].value === 11) {
			if (totalPlayerPoints > 21) {
				totalPlayerPoints = totalPlayerPoints - 10;
			};
		};
	};
}

var getPlayerPoints = function() {
	for (var i = 0; i < playerHand.length; i++) {
	playerPoints.push(playerHand[i].value);
	};
	console.log(playerPoints);
	for (var i in playerPoints) {
		totalPlayerPoints += playerPoints[i];
	};
	console.log(totalPlayerPoints);
	findPlayerAce();
	console.log(totalPlayerPoints);
	playerPoints = [];
	totalPlayerPoints = 0;
};

var dealerPoints = [];
var totalDealerPoints = 0;

var findDealerAce = function() {
	for (var i = 0; i < dealerHand.length; i++) {
		if (dealerHand[i].value === 11) {
			if (totalDealerPoints > 21) {
				totalDealerPoints = totalDealerPoints - 10;
			};
		};
	};
}

var getDealerPoints = function() {
	for (var i = 0; i < dealerHand.length; i++) {
	dealerPoints.push(dealerHand[i].value);
	};
	console.log(dealerPoints);
	for (var i in dealerPoints) {
		totalDealerPoints += dealerPoints[i];
	};
	console.log(totalDealerPoints);
	findDealerAce();
	console.log(totalDealerPoints);
	dealerPoints = [];
	totalDealerPoints = 0;
};

// if (totalDealerPoints < 17) {
// 	dealtoDealer();
// }

// Makes it easier to test
var runGame = function() {
	shuffle();
	startGame()
	getPlayerPoints();
	getDealerPoints();
}

var hitUntil17 = function() {
	while (dealer.totalPoints < 17) {
		clearPoints(dealer);
		dealCard(dealer);
		getPoints(dealer);
	};
// 	clearPoints(dealer);
// 	getPoints(dealer);
};

var calculateWinner = function () {
	if (hoomanPlayer.totalPoints > 21) {
		// Dealer wins!
		console.log("Dealer wins!");
	} else if (dealer.totalPoints > 21) {
		// Player wins!
		console.log("Player wins!");
	} else if (hoomanPlayer.totalPoints > dealer.totalPoints) {
		// Player wins!
		console.log("Player wins!");
	} else if (dealer.totalPoints > hoomanPlayer.totalPoints) {
		// Dealer wins!
		console.log("Dealer wins!");
	} else {
		// Bust!
		console.log("Bust!")
	};
};

var newHand = function() {
	hoomanPlayer.hand = [];
	clearPoints(hoomanPlayer);
	dealer.hand = [];
	clearPoints(dealer);
}

console.log(deck.length);

var replenishDeck = function() {
	if (deck.length < 10) {
		while (fullDeck.length !==0) {
			fullDeck.splice(Math.floor(Math.random() * (fullDeck.length - 1)), 1);
			deck.push(moveCard[0]);
		};
	};
};

function displayCard = function() {

}

player.hand[i].value


function displayCards(player, div){
	var playerCard = player.hand[i].name
    var cardImage = $("<img>").attr("src", "cards/" + playerCard + ".png")
    // .attr("display", "inline-block").attr("height", 250).attr("width", 172)
    $(div).append(playerCard)
}

// ========================================

// Shuffle away!
// $("#shuffle").click(function() {
// 	shuffle();
// 	// Testing purposes
// 	// Can't figure out the DRY way to do this
// 	console.log(deck[0], deck[1], deck[2], deck[3], deck[4], deck[5]);
// });

// Deal card
var dealCard = function(player) {
	cardDealt = deck.shift();
	(player.hand).push(cardDealt);
	console.log(player.hand);
}

var appendPlayerCard = function() {
	for (i = 0; i < hoomanPlayer.hand.length; i++) {
		var playerCard = hoomanPlayer.hand[i].name;
	  var cardImage = $("<img>").attr("src", "cards/" + playerCard + ".png").attr("height", 150).attr("width", 103);
	  $("#player-cards").append(cardImage);
	};
};

var appendDealerCard = function() {
	for (i = 0; i < dealer.hand.length; i++) {
		var dealerCard = dealer.hand[i].name;
	  var cardImage = $("<img>").attr("src", "cards/" + dealerCard + ".png").attr("height", 150).attr("width", 103);
	  $("#dealer-cards").append(cardImage);
	};
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
}

// So there are no repeats when calculating points
var clearPoints = function(player) {
	player.points = [];
	player.totalPoints = 0;
	// Checking to make sure it is cleared
	console.log(player.points);
	console.log(player.totalPoints);
}

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
}

var newHand = function() {
	hoomanPlayer.hand = [];
	clearPoints(hoomanPlayer);
	dealer.hand = [];
	clearPoints(dealer);
	replenishDeck();
};

// Deals two cards to each player
var dealHands = function() {
	if (deck.length >= 52) {
		shuffle();
		//Extra shuffling just because
		shuffle();
		shuffle();
	};
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
		console.log("Player wins!");
	} else if (hoomanPlayer.totalPoints > dealer.totalPoints) {
		// Player wins!
		console.log("Player wins!");
	} else if (dealer.totalPoints > hoomanPlayer.totalPoints) {
		// Dealer wins!
		console.log("Dealer wins!");
	} else {
		// Push!
		console.log("Push!");
	};
	console.log("Deck has: " + deck.length + " cards.");
	newHand();
};

$("#hit-me").click(function() {
	dealCard(hoomanPlayer);
	clearPoints(hoomanPlayer);
	getPoints(hoomanPlayer);
	if (hoomanPlayer.totalPoints > 21) {
		console.log("Bust!");
		newHand();
	} else if (hoomanPlayer.totalPoints === 21) {
		console.log("Player wins!");
		newHand();
	} else {
		// Do nothing
	};
	console.log("Deck has: " + deck.length + " cards.");
});

$("#deal-hands").click(function() {
	dealHands();
});

$("#stand").click(function() {
	hitUntil17();
	calculateWinner();
});