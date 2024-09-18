const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", (e) => {
        console.log(e.target);
        
    })
    
});


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
console.log(getComputerChoice());
// getComputerChioice END

let finalScore;
let finalHumanScore = 0;
let finalComputerScore = 0;

// looping 5 times
// for (let i = 0; i < 5; i++) {

    // human guess
    let humanChoices = prompt("What is your Guess?", "paper");
        function getHumanChoice() {     
            return humanChoices.toLowerCase();
        }
    // human guess END

    // playgame Start
    let playGame = () => {
        let humanScore = 0;
        let computerScore = 0;
        
        // playround function start
        function playRound(humanChoice, computerChoice)
        {
            // declare humanChoice as X and computerChoice as y
            let x = humanChoice;
            let y = computerChoice;
            // to display who win each round
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
        
            // display the score each condition
            console.log("computer: " + y);
            console.log("human:" + x);
            // display message
            console.log(message); 
        }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log("humanscore: " + humanScore);
        console.log("computerscore: " + computerScore);

    }
    // Playgame End

    // Call playgame function
    playGame();
    
// }
// looping END

// message display for final score
// if (finalHumanScore > finalComputerScore) {
//     alert("Human is better than Computer")
//     alert(`Final Score: Human Score ${finalHumanScore} vs Computer Score  ${finalComputerScore}`)
// } else if (finalComputerScore > finalHumanScore){
//     alert("Computer is lucky for now!")
//     alert(`Final Score: Computer Score  ${finalComputerScore} vs Human Score ${finalHumanScore}`)
// } else {
//     alert("Draw!")
// }

