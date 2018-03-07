//global variables:
var names = ["Philippe", "Michael", "Dusty", "Danielle", "Tanya", "Dawn", "David", "Alan", "Delia", "Rene", "Nick", "Yano", "MaryAnne", "Franz", "Rich", "Trixie", "Vic", "Martin", "Jojie", "Susan", "George"];
var winCount = 0;
var LossCount = 0;
var guessesLeft = 10;
var computerPick = "";
var underScores = "";
var userGuess;
var result = "";
var wrongLetter = "";



function startGame(){

delete compPick;
delete underScores;
delete userGuess;
guessesLeft = 10;

computerPick = names[Math.floor(Math.random() * names.length)];
    console.log(computerPick);

result = computerPick.split("");
console.log(result);
for (var i = 0; i < result.length; i++){
    underScores += "_ ";
    document.getElementById("word-blanks").innerHTML = underScores;
}

}


startGame();
