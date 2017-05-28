

      var animals = ["gazelle", "gorilla", "cheetah", "jaguar", "panther", "lion", "crocodile", "rhino", "zebra", "hippo", "rattlesnake", "stingray"]; //declare an array of words for the game
			var roundWordletters = []; // declare empty array of letters to be stored from random word
			var usedLetters = []; // empty array used to store letters that have been used
			var underScore = []; // underscores to take the place of the hidden word
			// prompt("press any key to begin!");
			
			var roundWord = animals[Math.floor(Math.random()*animals.length)];
				console.log(roundWord);// randomly picks word from array for a particular round to be     played and stores it in a variable called roundWord
			var win = "you win!";
			var lose = "you lose";
			
			for(i = 0; i < roundWord.length; i++){
				roundWordletters.push(roundWord.charAt(i)); //converts the string roundWord into an array of individual characters
				// console.log(roundWordletters[i]);
				underScore.push("_");
				document.getElementById("guess-array").innerHTML = underScore;
			}
			var guessLeft = 15; // player starts off with 10 guesses
			document.getElementById("guess-count").innerHTML = guessLeft;
			





			document.onkeyup = function(event){

				var letterGuess = event.key; //declares a user event in which a user presses key, input stored in variable called letterGuess
				// usedLetters.push(letterGuess);
				// alert(letterGuess);//returns back to user's guess
					
				// while(guessLeft > 0){
						for(j = 0; j <roundWordletters.length; j++){ //tests whether letterGuess matched any
							if(letterGuess == roundWordletters[j]){
									
								// usedLetters.push(letterGuess); //push correct letters into the used letter array
								// console.log(usedLetters);
								// console.log(roundWordletters);
								underScore.splice(j, 1, letterGuess);
								console.log(underScore);
								// document.getElementById("guess-array").innerHTML = underScore;
								document.getElementById("guess-array").innerHTML = letterGuess;
								
							 }
							
						}
							
						
					if(letterGuess){
								usedLetters.push(letterGuess);
								guessLeft--;
							}
					
						
					if(guessLeft == 0 && underScore.indexOf("_") > -1){			 
						 document.getElementById("winlose").innerHTML = lose;
							document.onkeyup =function(event) {
                    return false;
                   }
        win = lose;
        for(i =0; i < roundWordletters.length; i++){
        	underScore.splice(i, 1,roundWordletters[i]);
        	document.getElementById("guess-array").innerHTML = roundWordletters;

        }
							}
						
              
             

            	




					if(underScore.indexOf("_")==-1){
							document.getElementById("winlose").innerHTML = win;

							   document.onkeyup =function(event) {
                    return false;
                  }
							
						}
	    
					document.getElementById("guess-array").innerHTML = underScore;
					document.getElementById("guess-count").innerHTML = guessLeft;
					document.getElementById("guessed-letters").innerHTML = usedLetters;

	   
};


