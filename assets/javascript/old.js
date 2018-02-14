// initialize var's
var wordDisplay = document.getElementById("letterboard");
var played = document.getElementById("used");
var turnsLeft = document.getElementById("turns");
var gameover = document.getElementById("gameover");
var scoreboard = document.getElementById("scoreboard");
var imagenew = document.getElementById("hangmanImg");
var win=0;
var lose=0;

// list of words: initialize array of game words 
var food = ["spaghetti", "hamburger", "taco", "pizza", "felafel"];

// hangman: initialize array of images
//   var hangmanImg = ["hmimg1.jpg", "hmimg2.jpg", "hmimg3.jpg", "hmimg4.jpg", "hmimg5.jpg", "hmimg6.jpg", "hmimg7.jpg", "hmimg8.jpg"];

// Set word:  select random word from list 
var randNum = Math.floor(Math.random() * food.length);
        console.log(food[randNum]);
var gameWord = food[randNum];


// Set board:  create array of characters from word(string)
// populate letter board with blanks, post turns left
 var word = [];
 var blank = [];
 var turn = 8;
 for (var i=0; i<gameWord.length; i++){ 
        word.push(gameWord.charAt(i));
        blank.push("_");
        console.log(word[i]);
 }

    wordDisplay.textContent = blank.join(" ");
    turnsLeft.innerHTML = turn;
// game board display set for start of game
var letters=[];
var replacedBlanks = 0;

// START PLAY*****************************

// capture user input:  onkeyup
document.onkeyup = function(event) {

if ((turn > 0) && (replacedBlanks<word.length)){
        var count = 0;
        var guess = event.key.toLowerCase();
        console.log("User guess  " + guess);

//**************check to see that the guess is a new letter not previously played AND is valid key A-Z
//*********if (){}

        // update used letters with guessed letter
        letters.push(guess);
        played.textContent = letters.join(', ');
    
            // YES: 
            // for loop:  compare user input to each letter of Letter[]
                //if match:  replace blanks with letter) -- Letter[i] replaces Blank[i]
        for(var i=0; i<word.length; i++){
            if (guess === word[i]){
                blank[i] = word[i];
                wordDisplay.innerHTML = blank.join(" ");
                count++;  
            }
            
        }
        replacedBlanks = replacedBlanks + count;
        console.log(replacedBlanks + "replaced");

        if(replacedBlanks === word.length){
            win++;
            gameover.innerHTML = "YOU WON!!!";
            scoreboard.innerHTML="Wins:" + win + "Losses: " +lose;
            turn=0;
            }
        
        // if replacedBlanks = word.length, write to doc 
        //you win, win++, update win tally, exit (can you set turn to <0?....then add victory to game over )

//*********are any blanks left/all letters guessed> WIN
//       
        console.log("counter" + count);
        //if no matches:  add letter to Used[] update Turns-1
        if(count===0) {
                console.log("letter is not in word");
                turn=turn-1;
                console.log(turn);
                turnsLeft.innerHTML = turn;
                var hmimg = ('./assets/images/hmimg' + turn + '.jpg');
                console.log(hmimg);
                imagenew.src=hmimg;
        }
        
    }
    
            //GAME OVER
           
    else  {
            //Lose
            lose++;
            gameover.innerHTML = "Game Over";
            scoreboard.innerHTML="Wins:" + win + "Losses: " +lose;

            }
  
   
}
