// variables
let scores, roundScore, activePlayer, dice, gamePlaying, diceValueFirstPlayer,diceValueSecondPlayer;

// elements from DOM
const   diceFirstElement = document.querySelector('#dice-1'),
        diceSecondElement = document.querySelector('#dice-2'),
        btnHold = document.querySelector('.btn-hold'),
        btnRoll = document.querySelector('.btn-roll'),
        btnNew = document.querySelector('.btn-new'),
        winnerValue = document.querySelector('.winner-value');

// initialization of the game  
init();

// dice is hidden
diceFirstElement.style.display = 'none';
diceSecondElement.style.display = 'none';

// roll event
btnRoll.addEventListener('click', () => {
    if(gamePlaying){
        // dice is shown
        diceFirstElement.style.display = 'block';
        diceSecondElement.style.display = 'block';

        // random numbers for dice
        dice1 = Math.floor(Math.random()*6 + 1);
        dice2 = Math.floor(Math.random()*6 + 1);

        // dice values arrays of the two players
        // if(!activePlayer) {
        //     diceValueFirstPlayer.push(dice);
            
        //     if(diceValueFirstPlayer.length > 2) {
        //         diceValueFirstPlayer = [dice];
        //     }

        // } else {
        //     diceValueSecondPlayer.push(dice);

        //     if(diceValueSecondPlayer.length > 2) {
        //         diceValueSecondPlayer = [dice];
        //     }
        // }

        // display results
        diceFirstElement.setAttribute('src', `dice-${dice1}.png`);
        diceSecondElement.setAttribute('src', `dice-${dice2}.png`);
        if( (dice1 !== 1) && (dice2 !==1) ){
            
            // add score
            roundScore += (dice1 + dice2);
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
            
        } else {            
            // // next player
            getNextPlayer(); 
        }

        // one of the players have 6 two times in a row
        // if(!activePlayer) {
        //     if(diceValueFirstPlayer[0] === 6 && diceValueFirstPlayer[1] === 6) {
        //         getNextPlayer();
        //     }
        // } else {
        //     if(diceValueSecondPlayer[0] === 6 && diceValueSecondPlayer[1] === 6) {
        //         getNextPlayer();
        //     }
        // }
    }
});

// hold event
btnHold.addEventListener('click', () => {
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
        // if the player win the game 
        if(scores[activePlayer] >= winnerValue.value) {
            gamePlaying = false;
            document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
            diceFirstElement.style.display = 'none';
            diceSecondElement.style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            
        } else {
            // next player
            getNextPlayer();
        }
    }
});

// new game event
btnNew.addEventListener('click', init);





// functions
function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    // diceValueFirstPlayer = [];
    // diceValueSecondPlayer =[];

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
    

}

function getNextPlayer() {
    // dice values arrays init
    // diceValueFirstPlayer = [];
    // diceValueSecondPlayer =[];

    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    if(dice1 === 1 || dice2 === 1){
        setTimeout("diceFirstElement.style.display = 'none';diceSecondElement.style.display = 'none'",500);
        
    }
    

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    // clean current score
    roundScore = 0;
}



