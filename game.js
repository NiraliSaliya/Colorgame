//create secrer Number

var secretNumbeer= 4;
//ask uset for guess
var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumbeer) {
	alert (" you got it right");
}


else if(guess > secretNumbeer) {
	alert (" your number is too low guess high");
}



else if(guess < secretNumbeer) {
	alert (" your number is too high gueess low")
}

else alert ("thanks for playing");