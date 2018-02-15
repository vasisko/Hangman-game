
    // initialize var's
 
    var win = 0;
    var lose = 0;
    var gameWord = "";
    var word = [];
    var blank = [];
    var turn = 0;
    var letters= [];
    var replacedBlanks = 0;


    // list of words: initialize array of game words 
    var wordlist = ["spaghetti", "hamburger", "taco", "pizza", "felafel","meatloaf", "lasagna", "enchilada", "minestrone"];
    


// GAME FUNCTIONS:  start/restart ****************   
function startGame () {  
         
        // Pick word:  select random word from list 
        var randNum = Math.floor(Math.random() * wordlist.length);    
        gameWord = wordlist[randNum];
        console.log("gameWord: " + gameWord);

        // Set board:  create array of characters(word) from game word 
        // Populate letter board with blanks
        word = [];
        blank = [];
        for (var i=0; i<gameWord.length; i++){ 
                word.push(gameWord.charAt(i));
                blank.push("_");
            }

        // Set number of turns to be played
         turn = 8;
    
        // Change HTML - game board display for start of game
        document.getElementById("letterboard").innerHTML = blank.join(" ");
        document.getElementById("used").innerHTML = "";
        document.getElementById("turns").innerHTML = turn;
        document.getElementById("wins").innerHTML = win;
        document.getElementById("losses").innerHTML = lose;
        document.getElementById("hangmanImg").src = "./assets/images/hangman0.jpg";
}

// Finish game:  update wins/losses and restart
function restartGame(){
        replacedBlanks=0;
        gameWord="";
        letters=[];
        startGame();
    
}

// ***************** PLAY*****************************

startGame();


// Capture user input:  onkeyup
document.onkeyup = function(event) {

    //Clear gameover message
    gameover.innerHTML = "";
    
    var guess = event.key.toLowerCase();
            console.log("User guess  " + guess);
    
    // IF play is viable -----------
    if ((turn > 0) && (replacedBlanks<word.length)){
            var count = 0;
            
            // update used letters with guessed letter
            letters.push(guess);
            document.getElementById("used").innerHTML = letters.join(', ');

            // YES: 
            // for loop:  compare user input to each letter of Letter[]
            //if match:  replace blanks with letter) -- Letter[i] replaces Blank[i]
            console.log(word + "check4");
            for(var i=0; i<word.length; i++){
                if (guess === word[i]){
                    blank[i] = word[i];
                    document.getElementById("letterboard").innerHTML = blank.join(" ");
                    count++;  
                }  
            }
console.log(word + "check2");
            //How many blanks are left?
            replacedBlanks = replacedBlanks + count;

            // if replacedBlanks = word.length, all letters have been guessed so all blanks are replaced, user wins, win++, update win tally, restart 
            if(replacedBlanks === word.length){
                // win
                win++;
                gameover.innerHTML = "YOU WON!!!  Molto Bene!!";
                document.getElementById("wins").innerHTML = win;
                restartGame();
                }
                console.log(word + "check3");

            //if no matches:  add letter to Used[] update Turns-1
            if(count===0) {
                console.log("letter is not in word");
                var hmimg = ('./assets/images/hmimg' + turn + '.jpg');
                console.log(hmimg);
                document.getElementById("hangmanImg").src = hmimg;
                turn=turn-1;
                document.getElementById("turns").innerHTML = turn;
            }  

        } 
        // Otherwise if play is no longer viable -----------    
        else {
                //Lose
                lose++;
                gameover.innerHTML = "Game Over. You lost - No food for you!";
                document.getElementById("losses").innerHTML = lose;
                restartGame();
        }
             
    }
    
//GAME OVER -- reset/restart
              
    