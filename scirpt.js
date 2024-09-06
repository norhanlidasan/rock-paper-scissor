
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



