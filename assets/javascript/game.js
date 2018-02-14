
    // initialize var's
 
    var win=0;
    var lose=0;
    var randNum=0;
    var gameWord = "";
    var word = [];
    var blank = [];
    var turn = 8;
    var letters=[];
    var replacedBlanks = 0;


    // list of words: initialize array of game words 
    var wordlist = ["spaghetti", "hamburger", "taco", "pizza", "felafel","meatloaf", "lasagna", "enchilada", "minestrone"];
    
// GAME FUNCTIONS:  start/play/restart ****************   
function startGame () {  

        // Pick word:  select random word from list 
        randNum = Math.floor(Math.random() * wordlist.length);    
        gameWord = wordlist[randNum];

        // Set board:  create array of characters(word) from game word 
        // populate letter board with blanks
        for (var i=0; i<gameWord.length; i++){ 
                word.push(gameWord.charAt(i));
                blank.push("_");
                console.log(word[i]);
            }

         // Set number of turns to be played
         turns = 8;
    
    
        // Change HTML - game board display for start of game
        document.getElementById("letterboard").innerHTML = blank.join(" ");
        document.getElementById("used").innerHTML = "";
        document.getElementById("turns").innerHTML = turn;
        document.getElementById("wins").innerHTML = win;
        document.getElementById("losses").innerHTML = lose;
        document.getElementById("hangmanImg").src = "./assets/images/hangman0.jpg";

        console.log(gameWord);
        console.log("START Function");
        
}
// Play game: process input/compare to word/take turn/win/lose



// Finish game:  update wins/losses and restart

function restartGame(){
        replacedBlanks=0;
        letters=[];
        startGame();
        console.log("RE - START Function");
}



// ***************** PLAY*****************************

startGame();


 // capture user input:  onkeyup
document.onkeyup = function(event) {
    
    if ((turn > 0) && (replacedBlanks<word.length)){
            var count = 0;
            var guess = event.key.toLowerCase();
            console.log("User guess  " + guess);
    
            // update used letters with guessed letter
            letters.push(guess);
            document.getElementById("used").innerHTML = letters.join(', ');

            // YES: 
            // for loop:  compare user input to each letter of Letter[]
            //if match:  replace blanks with letter) -- Letter[i] replaces Blank[i]
            for(var i=0; i<word.length; i++){
                if (guess === word[i]){
                    blank[i] = word[i];
                    document.getElementById("letterboard").innerHTML = blank.join(" ");
                    count++;  
                }
                
            }
            replacedBlanks = replacedBlanks + count;
            console.log(replacedBlanks + "replaced");
    
            if(replacedBlanks === word.length){
                win++;
                gameover.innerHTML = "YOU WON!!!";
                }
            
            // if replacedBlanks = word.length, write to doc 
            //you win, win++, update win tally, exit (can you set turn to <0?....then add victory to game over )
           // 
        //
    
    //*********are any blanks left/all letters guessed> WIN
    //       
            console.log("counter" + count);
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
        else  {
                //Lose
                lose++;
                gameover.innerHTML = "Game Over";
               
                }
        
               
        
    }

//GAME OVER -- reset/restart
restartGame();              
    