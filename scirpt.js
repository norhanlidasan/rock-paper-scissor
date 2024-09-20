// select each button (rock, paper, scissor)
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", (e) => {
        
            // getComputerChioice Start, give a random number from 1 to 3, and assigned: 1 - rock, 2 - paper and 3 - scissor
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

        // Global Declration
        // to display who win each round
        let message;
        
        // declaring of the x as humanChoice and y as computerChoice
        let x;
        let y;
        
        // declaring humanChoices
        let humanChoices;
        function getHumanChoice() {     
            // human guess (e.target.textContent is the value of the button you pressed)
            humanChoices = e.target.textContent;
            return humanChoices;
        }

        // playgame Start
        let playGame = () => {
            let humanScore = 0;
            let computerScore = 0;
            
            // playround function start
            function playRound(humanChoice, computerChoice)
            {
                // declare humanChoice as X and computerChoice as y
                x = humanChoice;
                y = computerChoice;
                  
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
                console.log("human:" + x);
                console.log("computer: " + y);
                
                // display message
                console.log(message); 
            }
            
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            
            playRound(humanSelection, computerSelection);
            console.log("humanscore: " + humanScore);
            console.log("computerscore: " + computerScore);

            // select class result
            const result = document.querySelector(".result");

                        // create div1 for humanChoice
                        let div1 = document.createElement("div");
                        div1.textContent = x;
                        result.appendChild(div1);
            
                        // create div1 for computerChoice
                        let div2 = document.createElement("div");
                        div2.textContent = y;
                        result.appendChild(div2);
            
                        // create div for display the message
                        let div = document.createElement("div");
                        div.textContent = message;
                        result.appendChild(div);

                        // create div for humanScore
                        let divHumanScore = document.createElement("div");
                        divHumanScore.textContent = humanScore;
                        result.appendChild(divHumanScore);

                        // create div for computerScore
                        let divComScore = document.createElement("div");
                        divComScore.textContent = computerScore;
                        result.appendChild(divComScore);
        }
        // Playgame End
        
        if(finalHumanScore == 5){
            alert("5 points")
        }

        // Call playgame function
        playGame();
            
        console.log(finalHumanScore)
        })
    
});


    
// }
// looping END

// message display for final score
// if (finalHumanScore > finalComputerScore) {
//     alert("Human is better than Computer")
//     alert(`Final Score: Human Score ${finalHumanScore} vs Computer Score  ${finalComputerScore}`)
// } else if (finalComputerScore > finalHumanScore){
//     alert("Computer is lucky for now!")
//     alert(`Final Score: Comessage`)
// }