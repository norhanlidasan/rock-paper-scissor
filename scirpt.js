// getComputerChioice Start, give a random number from 1 to 3, and assigned: 1 - rock, 2 - paper and 3 - scissor
let getComputerChoice = function() {
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

// to display who win each round
let message;
// let finalHumanScore = 0;
// let finalComputerScore = 0;
let humanScore = 0;
let computerScore = 0;
let scoreDraw = 0;

let playRound = function(humanChoice, computerChoice) {
            // declare humanChoice as X and computerChoice as y
            x = humanChoice;
            y = computerChoice;
              
            if ( (x == "rock" && y == "scissor" ) || (x == "scissor" && y == "paper") || (x == "paper" && y == "rock")){
                ++humanScore;
                // ++finalHumanScore;
                message = `human won! because ${x} is better than ${y}`;
            } else if ( (x == "rock" && y == "paper" ) || (x == "scissor" && y == "rock") || (x == "paper" && y == "scissor") ){
                ++computerScore;
                // ++finalComputerScore;
                message =  `computer won! because ${y} is better than ${x}`;
            } else {
                ++scoreDraw;
                message = "Draw";
            }
            console.log("human:" + x);
            console.log("computer: " + y);
            console.log(message); 
        }

        // playgame Start
        let playGame = () => {
            playRound(getHumanChoice(), getComputerChoice());
            console.log("humanscore: " + humanScore);
            console.log("computerscore: " + computerScore);
        }
        // Playgame End

// declaring humanChoices
let humanChoices;
let getHumanChoice = function() {     
    return humanChoices;
}

// select each button (rock, paper, scissor)
const buttons = document.querySelectorAll("button");

const result = document.querySelector(".result");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div = document.createElement("div");
const divHumanScore = document.createElement("div");
const divComScore = document.createElement("div");
const divDrawSc0re = document.createElement("div");

const showHumanScore = document.querySelector(".human > p:last-child");
const showCompScore = document.querySelector(".computer > p:last-child");
const drawSCore = document.querySelector(".draw > p:last-child")


// every click the 3 button, it will run this code
buttons.forEach(button => {
    button.addEventListener("click", (e) => { 
        // human guess (e.target.textContent is the value of the button you pressed)
        humanChoices = e.target.textContent;
        
        // Call playgame() function
        playGame();  

        // create div1 for humanChoice
        div1.textContent = x;
        result.appendChild(div1);

        // create div for display the message
        div.textContent = message;
        result.appendChild(div); 

        // create div1 for computerChoice
        div2.textContent = y;
        result.appendChild(div2);
                    
        // create div for humanScore
        divHumanScore.textContent = humanScore;
        showHumanScore.appendChild(divHumanScore);
        
        // create div for computerScore
        divComScore.textContent = computerScore;
        showCompScore.appendChild(divComScore);

        divDrawSc0re.textContent = scoreDraw;
        drawSCore.appendChild(divDrawSc0re);

        getHumanChoice();
        finalMessage();
        getFirstFive();
        
        })       
});

// after reaching 5 points, button will be diable
let getFirstFive = function() {
        if (humanScore == 5 || scoreDraw == 5  || computerScore == 5) { 
            disabledButton();
        }   
}

// disable the buttons
let disabledButton = function() {
    for (const but of buttons) {   
        but.disabled = true;
    }
}

// show the final message after reach the 5 points
let arrMessage = ["Human Win!", "Computer Win!", "Draw!"];
let paraMessage = document.createElement("p");

  let finalMessage = () => {
    if (humanScore == 5) {
        result.removeChild(div);
        result.removeChild(div2);
        result.removeChild(div1);
        result.classList.add("finalMessage");
        paraMessage.textContent = arrMessage[0];
        paraMessage.setAttribute('style', 'font-size: 2em');
        result.appendChild(paraMessage);
    } else if ( scoreDraw == 5) {
        result.removeChild(div);
        result.removeChild(div2);
        result.removeChild(div1);
        result.classList.add("finalMessage");
        paraMessage.textContent = arrMessage[2];
        paraMessage.setAttribute('style', 'font-size: 2em');
        result.appendChild(paraMessage);
    } else if (computerScore == 5) {
        result.removeChild(div);
        result.removeChild(div2);
        result.removeChild(div1);
        result.classList.add("finalMessage");
        paraMessage.textContent = arrMessage[1];
        paraMessage.setAttribute('style', 'font-size: 2em');
        result.appendChild(paraMessage);
    }
  }

// reset button function
let buttonReset = document.querySelector(".reset");
 
buttonReset.addEventListener("click", ()=> {
  humanScore = 0;
  computerScore = 0;
  scoreDraw = 0;
  divHumanScore.textContent = 0;
  divDrawSc0re.textContent = 0;
  divComScore.textContent = 0;
  div1.textContent = "";
  div.textContent = "";
  div2.textContent = "";
  result.textContent = "";
  result.classList.remove("finalMessage");
  for (const but of buttons) {   
      but.disabled = false;
  }
});