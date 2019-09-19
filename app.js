const game = ()=> {
    let pScore = 0;
    let cScore = 0; 


    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        }); 
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        
        options.forEach(option =>{
            option.addEventListener('click', function() {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                    //compare hands
                compareHands(this.textContent, computerChoice);
                //Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    // function finishGame () {
    //     if(pScore || cScore === '10') {
    //         alert("'winner' + is the winner");
    //     }
    //     else {
    //         return;
    //     }
    // };

    const compareHands = (playerChoice, computerChoice) => {
        //Update text
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
            else if (computerChoice === 'lizard'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            };
        }
        //check for paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            };
        }
        //check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            };
        }
        //check for lizard
        if(playerChoice === 'lizard') {
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else if (computerChoice === 'scissors'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
             else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            };
        }
        //check for spock
        if(playerChoice === 'spock') {
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === 'rock'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
             else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            };
        }
    };



    //Call all the inner functions
    startGame();
    playMatch();
    updateScore();
    // finishGame();
};

//start the game fucntion
game();