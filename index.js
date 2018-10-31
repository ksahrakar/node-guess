var Word = require("./word");
var inquirer=require("inquirer");
var numGuesses=0;
var done=false;
var wins = 0;
var losses = 0;
var again=true;
var guessedSoFar=[];

var q1 = [
    {type:"input",
    message:"Guess a letter",
    name:"guess"}
];

var q2 = [
    {type:"input",
    message:"Do you want to play again('y' or 'n')",
    name:"playAgain"}
];

//Obtains guess and calls itself recursively
function getLetter(a){
    if(!done){
        if(numGuesses<10){
            inquirer.prompt(q1).then(function(ans1){
                console.log("You have "+(9-numGuesses)+" guess(es) left.");
                a.guess(ans1.guess);
                a.show();
                if(a.guessed()){done=true;getLetter(a)}else{
                    numGuesses++;
                    listGuessed(ans1.guess);
                    getLetter(a)
                };
            })        
        } else {
            console.log("You have no more guesses left.");
            console.log("SORRY, YOU LOSE!");
            console.log("The word was '"+a.word+"'")
            losses++;
            console.log("Wins: "+wins+"  Losses: "+losses);
            getGame()
        }
    } else if (done){
        console.log("GREAT JOB, YOU WIN!");
        wins++;
        console.log("Wins: "+wins+"  Losses: "+losses);
        getGame();
    }
}

//Lists all guessed letters
function listGuessed(x){
    guessedSoFar.push(x);
    console.log("You've guessed: '"+guessedSoFar.join(",")+"' so far.")
}

//Gets preference to continue playing when a game is done
function getGame(){
    inquirer.prompt(q2).then(function(ans2){
        if (ans2.playAgain=="y"){again=true; playGuess()}else{again=false; playGuess()};
    })
}

//Core function to play the game
function playGuess(){
    if (again){
        guessedSoFar=[];
        numGuesses=0;
        done=false;
        var sWord = new Word();
        sWord.show();
        getLetter(sWord);
    } else {console.log("Thanks for playing, bye!")}
}
console.log("Guess a random word!");
console.log("Don't duplicate your guess!")
playGuess();

    
