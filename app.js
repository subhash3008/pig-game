/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore, activePlayer ,gamePlaying;

init();

function btn () {
	//Do something here
}


document.querySelector('.btn-roll').addEventListener('click' , function (){
		if(gamePlaying){
			//Get a random number
			var dice = Math.floor(Math.random() * 6) + 1;
		
			//Display the result
			var diceDOM = document.querySelector('.dice');
			diceDOM.style.display = 'block';
			diceDOM.src = 'dice-'+ dice + '.png';
		
			//Update the round score only if the rolled number is not 1
			if(dice !== 1){
				//addScore
				roundScore += dice ;
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
			} else {
				//Next Player
				nextPlayer();
			}
		}
	});
	
document.querySelector('.btn-hold').addEventListener( 'click' , function() {
		if(gamePlaying) {
			//Add current score to global score
			score[activePlayer] += roundScore;
		
			//Update the UI
			document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
		
			//Check if the player won the game
			if( score[activePlayer] >= 20 ){
				document.querySelector('#name-' + activePlayer ).textContent = 'Winner!!';
				document.querySelector('.dice').style.display = 'none';
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
				gamePlaying = false;
			} else { 
				//Next Player
				nextPlayer();
			}
		}
	});
	
document.querySelector('.btn-new').addEventListener( 'click' , init );
	
function init() {
		//Initialize the game
		score = [0 , 0];
		roundScore = 0;
		activePlayer = 0;
		gamePlaying = true;

		document.querySelector('.dice').style.display = 'none';

		document.getElementById('score-0').textContent = 0;
		document.getElementById('score-1').textContent = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;
		document.getElementById('name-0').textContent = 'PLAYER 1';
		document.getElementById('name-1').textContent = 'PLAYER 2';
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');
	}
	
function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
			roundScore = 0;
			
			document.getElementById('current-0').textContent = '0';
			document.getElementById('current-1').textContent = '0';
			
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			
			document.querySelector('.dice').style.display = 'none';
	}
