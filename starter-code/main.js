var cards = ["queen", "queen", "king", "king"]; //a variable called card who has an array of queen, queem, king, king
var cardsInPlay = []; //empty array and the cards that are in play of the game
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


if (cardOne === cardTwo) {
		alert ("You've found a match!");
}	

	else if (cardThree === cardFour) {
		alert ("You've found a match");
}

	else {
		alert ("Sorry, try again.")
	}
*/


//sets up the board
var boardGame = document.getElementById("gameboard"); //targets gameboard id

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {//card length, depends on how many cards I put in my array
		var newCard = document.createElement("div"); //as it loops it's to create a div
		newCard.className = "card"; //each div should have the class name card
		//var newCardName = document.createTextNode("card"); within the div the word card should appear
		newCard.setAttribute("data-card", cards[i]);//not sure what this does but I took the code from the solution
		
		newCard.addEventListener("click", isTwoCards);//on the click the isTwoCards function will start
		boardGame.appendChild(newCard); //I have an error here and I'm not sure why
	}
}


var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute("data-card"));
	
	//show card's image - not understanding the use of "this" - so all of this code I took from the solution
	console.log(this.getAttribute("data-card"));
	if (this.getAttribute("data-card") === 'king') {
		this.innerHTML ='<img src="images/king.png">'; // king
		} else {
		this.innerHTML = '<img src="images/queen.png">'; //queen
	}
}

	if (cardsInPlay.length === 2){ //if two cards are chosen
		isMatch(cardInPlay);//start the function isMatch
		cardsInPlay = [];//clears cards to try again
	}



var isMatch = function(cards) {
	//message to player - a simple ifelse statement
	if (cards[0] === cards[1]) {//looking at the first card and the second card the player picked
      alert ("You are correct");//if a match
	}	else {
			alert ("please try again");//if not a match
 	}
}

createBoard(); //function that creates the whole game


