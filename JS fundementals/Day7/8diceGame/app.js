/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var newGameBtn = document.getElementsByClassName("btn-new")[0]
var rollBtn = document.getElementsByClassName("btn-roll")[0]
var holdBtn = document.getElementsByClassName("btn-hold")[0]
var dice = document.getElementsByClassName("dice")[0]
var score1 = document.getElementById("score-0")
var score2 = document.getElementById("score-1")
var currentBox1 = document.getElementById("current-0")
var currentBox2 = document.getElementById("current-1")
var playerPannel1 = document.getElementsByClassName("player-0-panel")[0]
var playerPannel2 = document.getElementsByClassName("player-1-panel")[0]
var wrapper = document.getElementsByClassName("wrapper clearfix")[0];

//reset all when the window load
score1.innerText=0;
score2.innerText=0;
currentBox1.innerText=0;
currentBox2.innerText=0;

var currentPlayer = 1;

newGameBtn.addEventListener("click" , (e)=>{
  dice.src ="dice-5.png";
  score1.innerText = 0;
  score2.innerText = 0;
  currentBox1.innerText =0;
  currentBox2.innerText =0;
  currentPlayer=1;
})

rollBtn.addEventListener("click" , (e)=>{
  var randomNum = Math.ceil(Math.random()*6);
  dice.src = "dice-" +randomNum+".png";

  if(randomNum !== 1){
    // when player 1 roll
    if(currentPlayer == 1){
      var currentScore1 = parseInt(currentBox1.innerText);
      var newScore1 = currentScore1 + randomNum;
      currentBox1.innerText = newScore1;
    }else{
      //when player2 roll
      var currentScore2 = parseInt(currentBox2.innerText);
      var newScore2 = currentScore2 + randomNum;
      currentBox2.innerText = newScore2;
    }
    //dice 1 cases
  }else{
    //player 1 got dice 1
    if(currentPlayer == 1){
      currentBox1.innerText = 0;
      currentPlayer =2;
      playerPannel2.classList.add("active")
      playerPannel1.classList.remove("active")
    }else{
    //player 2 got dice 1
      currentBox2.innerText = 0;
      playerPannel1.classList.add("active")
      playerPannel2.classList.remove("active")
      currentPlayer = 1;
    }

  }
})


holdBtn.addEventListener("click" , (e)=>{
  //player 1
  if(currentPlayer == 1){
    var currScore1 = parseInt(currentBox1.innerText)
    var newScor1 = currScore1 + parseInt(score1.innerText)
    score1.innerText = newScor1
    currentBox1.innerText = 0
    currentPlayer =2;
    playerPannel2.classList.add("active")
    playerPannel1.classList.remove("active")
  }else{  
    //player 2
    var currScore2 = parseInt(currentBox2.innerText)
    var newScor2 = currScore2 + parseInt(score2.innerText)
    score2.innerText = newScor2
    currentBox2.innerText = 0;
    currentPlayer =1;
    playerPannel1.classList.add("active")
    playerPannel2.classList.remove("active")
  }
  // check if there is a winner when a player hold
  //if player 1 is the winner
  if(parseInt(score1.innerText) >= 100){
    var winnerDiv = document.createElement("div")
    winnerDiv.className = "winner";
    var winnerName = document.createElement("p")
    winnerName.className = "player-name"
    winnerName.innerText = "player 1 is the winner!"
    winnerDiv.append(winnerName)
    wrapper.prepend(winnerDiv)
  //if player 2 is the winner
  }else if (parseInt(score2.innerText) >= 100){
    var winnerDiv = document.createElement("div")
    winnerDiv.className = "winner";
    var winnerName = document.createElement("p")
    winnerName.className = "player-name"
    winnerName.innerText = "player 2 is the winner!"
    winnerDiv.append(winnerName)
    wrapper.prepend(winnerDiv)
  }
})


