// give a random number from 1 to 3, and assigned: 1 - rock, 2 - paper and 3 - scissor
function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3) + 1;

    switch (randNumber) {

        case 1:
            randNumber = "rock";
            break;
            
            case 2:
                randNumber = "paper";
                break;

                case 3:
                    randNumber = "scissor";
                    break;
    }

    return randNumber;
}
// getComputerChioice END

// color the consoe.log




let finalScore;
let finalHumanScore = 0;
let finalComputerScore = 0;

// looping 5 times
for (let i = 0; i < 5; i++) {

    // human guess
    let humanChoices = prompt("What is your Guess?", "paper");
        function getHumanChoice() {     
            return humanChoices.toLowerCase();
        }
    // human guess END

    let playGame = () => {
        let humanScore = 0;
        let computerScore = 0;
        
        function playRound(humanChoice, computerChoice)
        {
            let x = humanChoice;
            let y = computerChoice;
            let message;
        
            if ( (x == "rock" && y == "scissor" ) || (x == "scissor" && y == "paper") || (x == "paper" && y == "rock")){
                humanScore += 1;
                ++finalHumanScore;
                message = `human won! because ${x} is better than ${y}`;
            } else if ( (x == "rock" && y == "paper" ) || (x == "scissor" && y == "rock") || (x == "paper" && y == "scissor") ){
                computerScore += 1;
                ++finalComputerScore;
                message =  `computer won! because ${y} is better than ${x}`;
            } else {
                message = "Draw";
            }
        
            console.log("computer: " + y);
            console.log("human:" + x);
            console.log(message); 
        }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log("humanscore: " + humanScore);
        console.log("computerscore: " + computerScore);

    }
        playGame();
    
}
if (finalHumanScore > finalComputerScore) {
    console.warn("Human is better than Computer")
    console.log(`Final Score: Human Score ${finalHumanScore} vs Computer Score  ${finalComputerScore}`)
} else if (finalComputerScore > finalHumanScore){
    console.warn("Computer is lucky for now!")
    console.log(`Final Score: Computer Score  ${finalComputerScore} vs Human SCore ${finalHumanScore}`)
} else {
    console.warn("Draw!")
}

// loopingEND
